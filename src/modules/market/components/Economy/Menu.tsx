import Link from "next/link";

type MenuProps = {
  links: { parent: string; label: string; href: string }[];
  header: string;
};

export function Menu({ links, header }: MenuProps) {
  return (
    <section>
      <header className="bg-[#0B0B0B] p-3 font-bold capitalize text-white">
        {header}
      </header>
      <ul className="flex w-full flex-col">
        {links.map((link) => (
          <li
            key={link.label.replaceAll(" ", "-")}
            className="white-text text-hover-focus w-full text-center text-[#252525] odd:bg-[#F9F9F9] dark:bg-white/5 dark:odd:bg-white/5"
          >
            <Link href={link.href} className="block h-full w-full p-3">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
