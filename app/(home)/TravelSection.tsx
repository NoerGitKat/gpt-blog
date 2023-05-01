import { Post } from "@prisma/client";
import { Card } from "app/(shared)";

type TravelSectionProps = {
  travelPosts: Array<Post>;
};

function TravelSection({ travelPosts = [] }: TravelSectionProps) {
  return (
    <section className="mt-10">
      <hr className="border-1" />

      <header className="flex items-center gap-3 my-8">
        <h3 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h3>
        <p className="font-bold text-2xl">New Travel Experiences</p>
      </header>

      {travelPosts.length > 0 ? (
        <ul className="sm:flex justify-between gap-8">
          {travelPosts.map((post, index) => (
            <li key={`post${index + 1}`}>
              <Card
                imageHeight="h-80"
                className="basis-1/3 mt-5 sm:mt-0"
                post={post}
              />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <aside className="sm:flex justify-between gap-8">
            <div className="basis-1/3 mt-5 sm:mt-0 bg-wh-500 h-80"></div>
            <div className="basis-1/3 mt-5 sm:mt-0 bg-wh-500 h-80"></div>
            <div className="basis-1/3 mt-5 sm:mt-0 bg-wh-500 h-80"></div>
          </aside>
          <div className="sm:flex justify-between items-center gap-3 mt-7 mb-5 h-80 bg-wh-500"></div>
        </>
      )}
      {travelPosts.length > 1 && (
        <Card
          className="sm:flex justify-between items-center gap-3 mt-7 mb-5"
          imageHeight="h-80"
          post={travelPosts[travelPosts.length - 1]}
        />
      )}
    </section>
  );
}

export default TravelSection;
