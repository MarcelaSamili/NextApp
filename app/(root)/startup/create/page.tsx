import StartupForm from '@/app/component/StartupForm';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await auth();

  if (!session) redirect('/');

  return (
    <>
      <section className="blue_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup Pitch</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default page;
