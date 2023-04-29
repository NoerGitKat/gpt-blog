import { Post } from "@prisma/client";
import { Card } from "../(shared)";

type MoreSectionProps = {
  otherPosts: Array<Post>;
};

const MoreSection = ({ otherPosts = [] }: MoreSectionProps) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />

      <header className="flex items-center gap-3 my-8">
        <h3 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          MORE
        </h3>
        <p className="font-bold text-2xl">Other Posts</p>
      </header>
      {otherPosts.length > 0 ? (
        <ul className="sm:grid grid-cols-2 gap-16">
          {otherPosts.map((post, index) => (
            <li key={`post${index + 1}`}>
              <Card imageHeight="h-80" className="mt-5 sm:mt-0" post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <aside className="sm:grid grid-cols-2 gap-16">
          <div className="mt-5 sm:mt-0 bg-wh-500 h-80"></div>
          <div className="mt-5 sm:mt-0 bg-wh-500 h-80"></div>
          <div className="mt-5 sm:mt-0 bg-wh-500 h-80"></div>
          <div className="mt-5 sm:mt-0 bg-wh-500 h-80"></div>
        </aside>
      )}
    </section>
  );
};

export default MoreSection;
