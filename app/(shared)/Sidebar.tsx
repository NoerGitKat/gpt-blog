import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

type SidebarProps = {
  socials: Array<{
    name: string;
    src: string;
    url: string;
  }>;
};

function Sidebar({ socials = [] }: SidebarProps) {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks socials={socials} isDark />
      </div>
      <Subscribe />
      <Image
        className="hidden md:block my-8 w-full"
        alt="advert-2"
        placeholder="blur"
        blurDataURL="aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG5kdmRsbHBnL2ltYWdlL3VwbG9hZC92MTY4MjU1NjU2MS9ncHQtYmxvZy9hZC0yX3AzdXBrZC5wbmc="
        src="https://res.cloudinary.com/dndvdllpg/image/upload/v1682556561/gpt-blog/ad-2_p3upkd.png"
        width={500}
        height={1000}
      />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          alt="about-profile"
          placeholder="blur"
          blurDataURL="aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG5kdmRsbHBnL2ltYWdlL3VwbG9hZC92MTY4MjU1NjU1OC9ncHQtYmxvZy9hYm91dC1wcm9maWxlX3d4Y2pjaS5qcGc="
          src="https://res.cloudinary.com/dndvdllpg/image/upload/v1682556558/gpt-blog/about-profile_wxcjci.jpg"
          width="500"
          height="250"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi
      </p>
    </section>
  );
}

export default Sidebar;
