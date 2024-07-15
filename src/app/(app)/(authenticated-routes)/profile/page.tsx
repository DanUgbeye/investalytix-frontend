import { Metadata } from "next";
import Link from "next/link";
import PersonalInfoTab from "./_tabs/personal-info";
import PrivacyTab from "./_tabs/privacy";
import SubscriptionsTab from "./_tabs/subscriptions";
import WatchlistTab from "./_tabs/watchlist";
import { PROFILE_TABS, ProfilePageTab, ProfilePageTabItem } from "./profile.types";


function getTabUrl(tab: ProfilePageTab) {
  return `?tab=${tab}`;
}

function verifyTab(tab: unknown): ProfilePageTabItem {
  let selectedTab = Object.values(PROFILE_TABS).find(
    (profileTab) => profileTab.path === tab
  );

  if (!selectedTab) {
    return PROFILE_TABS.PERSONAL_INFO;
  }

  return selectedTab;
}

export async function generateMetadata(props: {
  searchParams: { tab: string };
}): Promise<Metadata> {
  try {
    const {
      searchParams: { tab },
    } = props;

    const currentTab = verifyTab(tab);

    return {
      title: `${currentTab.label} | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

type PageProps = {
  params: {};
  searchParams: {
    tab?: string;
  };
};

export default function ProfilePage(props: PageProps) {
  const {
    searchParams: { tab },
  } = props;

  const currentTabItem = verifyTab(tab);

  return (
    <>
      <div className="mb-10 border-b-[0.5px] dark:border-b-main-gray-700">
        <h1 className="mb-8 text-4xl font-extrabold capitalize md:text-6xl">
          {currentTabItem.label}
        </h1>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 pb-5 md:gap-x-20">
          {Object.values(PROFILE_TABS).map((profileTab) => (
            <Link
              key={profileTab.path}
              className={`${currentTabItem.path === profileTab.path ? "text-primary-base dark:text-primary-light" : "text-hover-focus"} capitalize`}
              href={getTabUrl(profileTab.path)}
            >
              {profileTab.label}
            </Link>
          ))}
        </div>
      </div>

      <main className="min-h-[min(calc(100dvh-90px),40rem)] pb-20">
        {currentTabItem.path === PROFILE_TABS.SUBCRIPTIONS.path && (
          <SubscriptionsTab />
        )}

        {currentTabItem.path === PROFILE_TABS.WATCHLIST.path && (
          <WatchlistTab />
        )}

        {currentTabItem.path === PROFILE_TABS.PRIVACY.path && <PrivacyTab />}

        {currentTabItem.path === PROFILE_TABS.PERSONAL_INFO.path && (
          <PersonalInfoTab />
        )}
      </main>
    </>
  );
}
