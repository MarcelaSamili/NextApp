import NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Session {
    id: string;
  }
  interface JWT {
    id: string;
  }
}

/*declare module 'next-auth' {
  interface Session {
    id: string;
  }
  interface JWT {
    id: string;
  }
} */
/*interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }*/
