import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { socials } from "./data";

function Navbar(): JSX.Element {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <aside className="hidden sm:block">
          <SocialLinks socials={socials} />
        </aside>
        <ul className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </ul>
        <h6>Sign In</h6>
      </nav>
      <section className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <aside className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">GPT BLOG</h1>
          <p className="text-sm mt-3">
            This blog is generated by our AI overlord, ChatGPT
          </p>
        </aside>
        <aside className="basis-full relative w-auto h-32 bg-wh-500">
          <Image
            fill
            alt="advert-1"
            src={
              "https://res.cloudinary.com/dndvdllpg/image/upload/v1682556558/gpt-blog/ad-1_dsak3t.jpg"
            }
            sizes="(max-width: 480px) 100vw,
              (max-width: 768px) 75vw,
              (max-width: 1060px) 50vw,
              33vw"
            style={{ objectFit: "cover" }}
          />
        </aside>
      </section>
      <hr className="border-1 mx-10" />
    </header>
  );
}

export default Navbar;
