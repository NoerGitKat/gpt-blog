import { Post } from "@prisma/client";
import { Card } from "../(shared)";

type TechProps = {
  techPosts: Array<Post>;
};

function TechSection({ techPosts = [] }: TechProps): JSX.Element {
  return (
    <section>
      <hr className="border-1" />
      <header className="flex items-center gap-3 my-8">
        <h3 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h3>
        <p className="font-bold text-2xl">Latest news in Technology</p>
      </header>

      {techPosts.length > 0 ? (
        <ul className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
          {techPosts.map((post, index) => (
            <li key={`post${index + 1}`}>
              <Card
                className={`col-span-1 ${
                  index === 0
                    ? "row-span-3"
                    : "row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                }`}
                imageHeight={index === 0 ? "h-96" : "h-48"}
                post={post}
                isLongForm={index === 0}
                isSmallCard={index !== 0}
              />
            </li>
          ))}
        </ul>
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

export default TechSection;
