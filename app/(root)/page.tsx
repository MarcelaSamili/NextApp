import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import SearchForm from '../component/SearchForm';
import StartupCard, { StartupTypeCard } from '../component/StartupCard';

import { sanityFetch, SanityLive } from '@/sanity/lib/live';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });

  //console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <section className="blue_container ">
        <h1 className="heading">
          Pitch Your Startup, Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
