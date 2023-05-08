import { Post } from "@/types";
import { filterPostsByCategory } from "@/utils";
import { TechSection, TrendingSection } from "./(home)";
import MoreSection from "./(home)/MoreSection";
import TravelSection from "./(home)/TravelSection";
import { Sidebar, Subscribe } from "./(shared)";
import { socials } from "./(shared)/data";
import { prisma } from "./api/client";

async function getPosts(): Promise<Post[] | undefined> {
  try {
    const posts = prisma.post.findMany();
    return posts;
  } catch (err) {
    console.log("err", err);
    return undefined;
  }
}

async function Home() {
  const posts = await getPosts();
  const techPosts = filterPostsByCategory("Tech", posts);
  const trendingPosts = (posts && posts.slice(0, 4)) || [];

  return (
    <main className="px-10 leading-7">
      <TrendingSection trendingPosts={trendingPosts} />
      <section className="md:flex gap-10 mb-5">
        <aside className="basis-3/4">
          <TechSection techPosts={[]} />
          <TravelSection travelPosts={[]} />
          <MoreSection otherPosts={[]} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </aside>
        <aside className="basis-1/4">
          <Sidebar socials={socials} />
        </aside>
      </section>
    </main>
  );
}

export default Home;
