import { TechSection, TrendingSection } from "./(home)";

function Home() {
  return (
    <main className="px-10 leading-7">
      <TrendingSection trendingPosts={[]} />
      <section className="md:flex gap-10 mb-5">
        <aside className="basis-3/4">
          <TechSection techPosts={[]} />
        </aside>
      </section>
    </main>
  );
}

export default Home;
