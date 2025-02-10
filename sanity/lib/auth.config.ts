import { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { client } from './client';
import { writeClient } from './write';
import { AUTHOR_BY_GITHUB_ID_QUERY } from './queries';

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const { name, email, image } = user;
      const { id, login, bio } = profile || {};

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });

      if (!existingUser) {
        await writeClient.create({
          _type: 'author',
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || '',
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id });
        console.log('Token atualizado:', token);

        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      console.log('Token recebido no callback session:', token);
      session.user.id = token.id as string;
      return session;
    },
  },
};
