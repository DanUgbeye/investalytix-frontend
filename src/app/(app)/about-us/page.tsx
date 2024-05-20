import { Container } from "@/components/container";

const aboutUsContent = `
At investalytix, we blend financial expertise with technological innovation to revolutionize investment analysis and education. Led by Jimmy Alan, a professional with a rich background in Engineering and Finance, investalytix provides sophisticated tools that make high-level investment analysis accessible to everyone.

Jimmy's journey began as a young 15-year-old Iraqi immigrant from a poor family who escaped the country after the Desert Storm war and moved to America. He pursued Electrical Engineering and worked across three different industries before transitioning into Finance. Influenced by greats like Benjamin Graham and Warren Buffett, Jimmy envisioned a platform that not only offers precise, real-time stock valuation data but also a comprehensive suite of financial analysis tools.

Our platform empowers individual investors and traders with institutional-grade research tools and strategies. Our services include a stock dashboard, the latest financial news, equity research, educational resources, and real-time stock valuation. We utilize advanced methodologies such as the Discounted Cash Flow Method, Trading Multiples, Peter Lynch Fair Value, Earnings Power Value, and Dividend Discount Model, making sophisticated investment analysis accessible and affordable.

We analyze trends across equity, options, bond, currency, and credit markets to devise asset allocations aimed at maximizing returns. By integrating macroeconomic insights with quantitative methods and technical analysis, we ensure robust investment strategies.

investalytix is committed to democratizing financial knowledge. Whether you're navigating stock market complexities or expanding your investment skills, we aim to be your trusted guide, making informed, data-driven investment decisions accessible to all.

Join us at investalytix, where empowering your financial journey is our mission.
`;

export default function AboutUsPage() {
  return (
    <main>
      <Container className=" max-w-5xl py-10 min-h-[calc(100dvh-90px)] ">
        <h1 className=" text-center text-3xl font-bold text-primary-base ">
          About Us
        </h1>

        <p className=" whitespace-pre-line text-justify ">{aboutUsContent}</p>
      </Container>
    </main>
  );
}
