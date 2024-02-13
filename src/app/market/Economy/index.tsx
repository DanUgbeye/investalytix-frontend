export default function Economy() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-16 xl:grid-cols-3">
      <div className="col-span-2 xl:col-span-3">
        <Menu
          header="Main Indicators"
          links={[
            "GDP Growth Rate",
            "Interest Rate",
            "Inflation Rate",
            "Unemployment Rate",
            "Government Debt to GDP",
            "Credit Rating",
          ]}
        />
      </div>
      <Menu
        header="Bonds"
        links={["10 Years Treasury", "30 Years Treasury", "Yield Curve"]}
      />
      <Menu
        header="Labour"
        links={["Initial Jobless Claims", "Unemployment Rate", "Popluation"]}
      />
      <Menu
        header="Government"
        links={["Credit Rating", "Government Debt", "Government Debt to GDP"]}
      />
      <Menu
        header="Money"
        links={["Interest Rate", "Central Bank Balance Sheet"]}
      />
      <Menu header="GDP" links={["GDP", "GDP Growth Rate"]} />
      <Menu
        header="Consumer"
        links={["Consumer Confidence", "Consumer Spending"]}
      />
      <div className="max-xl:hidden"></div>
      <Menu header="Calendar" links={["Economic Calendar"]} />
      <div className="max-xl:hidden"></div>
    </div>
  );
}

function Menu({ links, header }: { links: string[]; header: string }) {
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
            {link}
          </li>
        ))}
      </ul>
    </section>
  );
}
