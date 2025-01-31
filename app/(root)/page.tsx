import SearchForm from '../component/SearchForm';
import StartupCard from '../component/StartupCard';
import img1 from '../imgs/img1.jpg';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Marcela' },
      _id: 1,
      description: 'This is a description',
      image: { img1 },
      category: 'Developer',
      title: 'We Developers',
    },
  ];

  return (
    <>
      <section className="blue_container ">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
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
            posts.map((post: StartupsCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
