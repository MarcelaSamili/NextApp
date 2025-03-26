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






