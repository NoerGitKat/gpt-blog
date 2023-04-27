import Image from "next/image";

type SocialLinksProps = {
  isDark?: boolean;
  socials: { url: string; src: StaticImageData; name: string }[];
};

function SocialLinks({
  isDark = false,
  socials = [],
}: SocialLinksProps): JSX.Element {
  return (
    <ul className="flex justify-between items-center gap-7">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={`${isDark ? "brightness-0" : ""} hover-opacity-50`}
            src={social.src}
            alt={social.name}
            width={20}
            height={20}
          />
        </a>
      ))}
    </ul>
  );
}

export default SocialLinks;
