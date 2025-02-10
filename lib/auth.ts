import NextAuth from 'next-auth';
import { authConfig } from '../sanity/lib/auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
