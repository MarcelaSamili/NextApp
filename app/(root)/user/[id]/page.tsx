import { StartupCardSkaleton } from '@/app/component/StartupCard';
import UserStartups from '@/app/component/UserStartups';

import { auth } from '@/lib/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>
          <Image
            src={user.image}
            alt={user.name}
            width={220}
            height={220}
            className="profile_image"
          />
          <p className="text-30-extrabold mt-7 text-center bg-[rgb(174,219,235)] rounded-full p-2">
            @{user?.username}
          </p>
          <p className="mt-1 text-center text-black">{user?.bio}</p>
        </div>
        <div className="fle-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id != id ? 'Your' : 'All'} Startups
          </p>
          <ul className="card_grid-sm">
            <Suspense fallback={<StartupCardSkaleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
