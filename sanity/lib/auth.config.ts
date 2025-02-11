import { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { client } from '@/sanity/lib/client';
import { writeClient } from './write';
import { AUTHOR_BY_GITHUB_ID_QUERY } from './queries';

export const authConfig: NextAuthConfig = {
  providers: [GitHub],
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

        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
};
