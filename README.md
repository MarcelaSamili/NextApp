## A production-ready full stack application using Nextjs, ReactJs, Typescript and TailwindCss.


-The project are not bilded, so you can init using npm run dev.
-I believe that for it to work on your machine you will need to replace my credentials with yours... 
so just try starting with "npm run dev", if it doesn't work use your credentials, I'll leave the step by step here.

#Dependency configuration
In addition to these initial configurations, you must install:
npm install next-auth@beta
npx auth secret

configure auth on github, as that is where you will get the keys:
AUTH_GITHUB_ID and
AUTH_GITHUB_SECRET
follow the steps:

Steps
- Open your github
- Click on the icon and go to settings
- On the side go to developer settings
- Click on OAuth App
- Create the authorizer
- Get the Client ID
- Get Client Secrets
-Put in the .env in the project

-This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



