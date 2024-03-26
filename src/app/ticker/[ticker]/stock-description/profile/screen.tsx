"use client";

interface ProfileScreenProps {
  ticker: string;
}

export default function ProfileScreen(props: ProfileScreenProps) {
  const { ticker } = props;

  return (
    <section className=" space-y-10 pb-10 ">
      <div className=" flex flex-wrap gap-x-10 gap-y-5 xl:grid xl:grid-cols-[1fr,2fr] xl:w-full xl:flex-nowrap xl:justify-between ">
        <div className=" flex flex-col space-y-2 xl:w-full ">
          <h3 className=" text-extrabold text-2xl ">Apple Inc.</h3>

          <div className=" max-w-60 text-sm ">
            One Apple Park Way, Cupertino, CA 95014, United States
          </div>

          <div className=" flex flex-col space-y-2 text-sm text-[#125BD4] ">
            <span>408 996 1010</span>
            <span>http://www.apple.com</span>
          </div>
        </div>

        <div className=" flex flex-wrap gap-x-10 gap-y-5 xl:w-full xl:justify-between ">
          <div className="  ">
            <table className=" text-sm ">
              <tr>
                <td className=" px-2 py-1  ">Sector:</td>
                <td className=" px-2 py-1 font-medium ">Technology</td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Industry:</td>
                <td className=" px-2 py-1 font-medium ">
                  Consumer Electronics
                </td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Full time Employees:</td>
                <td className=" px-2 py-1 font-medium ">161,000</td>
              </tr>
            </table>
          </div>

          <div className="  ">
            <table className=" text-sm ">
              <tr>
                <td className=" px-2 py-1  ">Shares Outstanding:</td>
                <td className=" px-2 py-1 font-medium ">15.6B</td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Institutional Ownership:</td>
                <td className=" px-2 py-1 font-medium ">61.67%</td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Market Cap:</td>
                <td className=" px-2 py-1 font-medium ">3.1T</td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Last Stock Split None:</td>
                <td className=" px-2 py-1 font-medium ">None</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className=" space-y-4 ">
        <h4 className=" text-xl font-bold ">Description</h4>

        <p className=" whitespace-pre-line text-justify ">
          Apple Inc. designs, manufactures, and markets smartphones, personal
          computers, tablets, wearables, and accessories worldwide. The company
          offers iPhone, a line of smartphones; Mac, a line of personal
          computers; iPad, a line of multi-purpose tablets; and wearables, home,
          and accessories comprising AirPods, Apple TV, Apple Watch, Beats
          products, and HomePod. It also provides AppleCare support and cloud
          services; and operates various platforms, including the App Store that
          allow customers to discover and download applications and digital
          content, such as books, music, video, games, and podcasts. In
          addition, the company offers various services, such as Apple Arcade, a
          game subscription service; Apple Fitness+, a personalized fitness
          service; Apple Music, which offers users a curated listening
          experience with on-demand radio stations; Apple News+, a subscription
          news and magazine service; Apple TV+, which offers exclusive original
          content; Apple Card, a co-branded credit card; and Apple Pay, a
          cashless payment service, as well as licenses its intellectual
          property. The company serves consumers, and small and mid-sized
          businesses; and the education, enterprise, and government markets. It
          distributes third-party applications for its products through the App
          Store. The company also sells its products through its retail and
          online stores, and direct sales force; and third-party cellular
          network carriers, wholesalers, retailers, and resellers. Apple Inc.
          was founded in 1976 and is headquartered in Cupertino, California.
        </p>
      </div>

      <div className=" grid gap-10 border-2 p-10 md:grid-cols-2 ">
        <div className=" space-y-1 ">
          <div className=" font-medium ">Arthur Levinson Ph.D.</div>
          <div className="  ">Independent Chairman of the Board</div>
        </div>

        <div className=" space-y-1 ">
          <div className=" font-medium ">Jeffrey Williams</div>
          <div className="  ">Chief Operating Officer</div>
        </div>

        <div className=" space-y-1 ">
          <div className=" font-medium ">Timothy Cook</div>
          <div className="  ">Chief Executive Officer, Director</div>
        </div>

        <div className=" space-y-1 ">
          <div className=" font-medium ">Luca Maestri</div>
          <div className="  ">
            Chief Financial Officer, Senior Vice President
          </div>
        </div>
      </div>
    </section>
  );
}
