import { Post } from "@prisma/client";
import TrendingCard from "./TrendingCard";

type TrendingSectionProps = {
  trendingPosts: Post[];
};

function TrendingSection({ trendingPosts }: TrendingSectionProps): JSX.Element {
  console.log("trendingPosts", trendingPosts);
  return (
    <section className="mt-6">
      <header className="flex items-center gap-3 mb-4">
        <h3 className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </h3>
        <p className="text-sm">
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </header>

      {trendingPosts.length > 0 ? (
        <aside className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
          {trendingPosts.map((post, index) => {
            if (index === 0)
              return (
                <TrendingCard
                  key={`post${index + 1}`}
                  className="col-span-2 row-span-2 bg-wh-500"
                  post={post}
                />
              );
            if (index === 1)
              return (
                <TrendingCard
                  key={`post${index + 1}`}
                  className="col-span-2 row-span-1 bg-wh-500"
                  post={post}
                />
              );
            return (
              <TrendingCard
                key={`post${index + 1}`}
                className="col-span-1 row-span-1 bg-wh-500"
                post={post}
              />
            );
          })}
        </aside>
      ) : (
        <aside className="flex justify-between gap-3 my-3">
          <div className="basis-1/2 bg-wh-500 h-96"></div>
          <div className="flex flex-col basis-1/2 gap-3 h-96">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="flex basis-1/2 gap-3">
              <div className="basis-1/2 bg-wh-500"></div>
              <div className="basis-1/2 bg-wh-500"></div>
            </div>
          </div>
        </aside>
      )}
    </section>
  );
}

export default TrendingSection;
