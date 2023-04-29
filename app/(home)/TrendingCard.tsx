import Image from "next/image";
import Link from "next/link";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

function TrendingCard({
  className = "",
  post = {},
}: TrendingCardProps): JSX.Element {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <aside className="z-0 relative w-full h-full">
        <Image
          fill
          alt="tech"
          placeholder="blur"
          src={post?.image}
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          style={{ objectFit: "cover" }}
        />
      </aside>
      <aside className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <aside className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <h3 className="text-wh-100 mt-2">{post?.title}</h3>
      </aside>
    </Link>
  );
}
export default TrendingCard;
