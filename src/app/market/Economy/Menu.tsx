type MenuProps = {
  links: string[];
  header: string;
  onClick?: (v: any) => void;
}
export function Menu({
  links,
  header,
  onClick,
}: MenuProps) {
  return (
    <section>
      <header className="bg-[#0B0B0B] p-3 font-bold capitalize text-white">
        {header}
      </header>
      <ul className="flex w-full flex-col">
        {links.map((link) => (
          <li
            key={link}
            className="w-full p-3 text-center text-[#252525] odd:bg-[#F9F9F9]"
          >
            <button onClick={onClick ? () => onClick(link) : undefined}>
              {link}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
