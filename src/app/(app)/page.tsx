"use client";

import { Container } from "@/components/container";
import { plans } from "@/data/plans";
import LatestNews from "@/modules/homepage/components/LatestNews";
import LoadingNews from "@/modules/homepage/components/LoadingNews";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import { SUBSCRIPTION_PLAN_NAMES } from "@/modules/subscription/types";
import { useAppStore } from "@/store";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Pricing from "./pricing/_pricing";

export default function Home() {
  const isPremiumUser = useAppStore(
    ({ user }) =>
      user !== undefined && user.plan === SUBSCRIPTION_PLAN_NAMES.PREMIUM
  );
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <main className="relative isolate flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat md:min-h-[700px] lg:min-h-[calc(100dvh_-_100px)]">
        <div className="absolute inset-0 -z-10 bg-black/70"></div>

        <Container className="z-20 mx-auto flex flex-col items-center justify-center py-10 text-center text-white md:max-w-3xl lg:max-w-6xl">
          <motion.h1
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              onscreen: {
                opacity: 1,
                scale: 1,

                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                },
              },
            }}
            viewport={{ once: true }}
            style={{ lineHeight: "1.2" }}
            className="text-4xl font-bold !leading-[1.3em] max-xs:text-center md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Integrating Macro, Technical Strategy, and Fundamentals
          </motion.h1>

          <p className="mx-auto mt-5 w-3/4 text-lg font-medium max-xs:text-center lg:w-3/5 xl:mt-8 xl:text-xl">
            Providing data-driven investment decisions with a comprehensive
            suite of financial analysis tools.
          </p>

          {/* <FiSearch className="mt-16 size-16" /> */}
        </Container>
      </main>

      <Container className="pt-20">
        <Suspense fallback={<LoadingNews />}>
          <LatestNews />
        </Suspense>
      </Container>

      <Container className="py-20">
        {/* <MarketMovers /> */}
        {/* <Suspense
          fallback={
            <div className="grid gap-x-20 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </div>
          }
        > */}
        <WithSidePanel
          sections={[
            SIDE_SECTIONS["CRYPTOCURRENCY"],
            SIDE_SECTIONS["CURRENCIES"],
            SIDE_SECTIONS["GAINERS"],
            SIDE_SECTIONS["HOT_PICKS"],
            SIDE_SECTIONS["INSIDER_TRADING"],
            SIDE_SECTIONS["LOSERS"],
            SIDE_SECTIONS["SECTOR_PERFORMANCE"],
            SIDE_SECTIONS["WATCHLIST"],
          ]}
        />
        {/* </Suspense> */}
      </Container>

      <section className="relative isolate flex min-h-[700px] w-full items-center justify-center bg-[url('/images/about-us.jpg')] bg-cover bg-center lg:h-screen">
        <div className="absolute inset-0 -z-10 bg-black/70"></div>

        <Container className="z-20 mx-auto flex max-w-6xl flex-col items-center justify-center py-10 text-center text-white md:max-w-3xl lg:max-w-6xl">
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-center text-4xl font-bold !leading-[1.3em] max-xs:text-center md:text-5xl lg:text-6xl xl:text-8xl"
          >
            About <br /> Investalytix
          </h1>

          <p className="mx-auto mt-10 text-lg font-medium max-xs:text-center lg:w-4/5 xl:mt-10 xl:text-xl">
            Welcome to investalytix, your hub for advanced investment analysis.
            Founded in 2023, we aim to make high-quality research accessible to
            everyone. Our platform offers tools like stock dashboards, real-time
            news, economic calendars, and more. By analyzing market trends and
            using quantitative models, we help investors maximize returns. Our
            goal is to level the investment playing field, providing top-tier
            insights and tools to all.
          </p>

          <Link
            href="/about-us"
            className="mt-16 rounded bg-[#EB4335] px-5 py-3 text-white hover:bg-[#ae3d32] focus:bg-[#ae3d32]"
          >
            More About Us
          </Link>
        </Container>
      </section>

      <section className="pt-20 lg:pt-40">
        <h1 className="mb-6 text-center text-6xl font-extrabold">
          Our Products
        </h1>

        <Products />
      </section>

      {/* Pricing */}
      {!isPremiumUser && (
        <section className="space-y-5 py-20">
          <div className=" ">
            <h1 className="mb-6 text-center text-6xl font-extrabold">
              Pricing Plans
            </h1>
            <p className="mx-auto max-w-[36ch] text-center">
              Simple, transparent pricing that grows with you.
            </p>
          </div>

          {/* <div className="relative mx-auto mt-8 w-fit rounded-full bg-gray-200 dark:bg-gray-100/10">
            <button
              type="button"
              onClick={() => updatePricingFrequency("monthly")}
              className={`rounded-full px-7 py-3 font-medium ${pricingFrequency === "monthly" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-transparent text-black dark:text-white"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => updatePricingFrequency("annually")}
              className={`rounded-full px-7 py-3 font-medium ${pricingFrequency === "annually" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-transparent text-black dark:text-white"}`}
            >
              Annually
            </button>

            <svg
              className="absolute -right-full top-0 hidden md:block"
              width={215}
              height={85}
              viewBox="0 0 215 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_218_9)">
                <path
                  d="M13.7712 48.9904C13.9489 48.9955 14.126 48.9957 14.3026 49.0054C17.5833 49.1838 20.8643 49.3566 24.1452 49.5472C24.8608 49.5882 25.4256 49.3554 25.7953 48.7491C26.3493 47.8402 25.8062 46.6321 24.7578 46.409C24.5483 46.3646 24.3291 46.3592 24.1149 46.3475C19.5251 46.0956 14.9352 45.8456 10.3453 45.5956C8.95148 45.5194 8.34538 46.0571 8.26864 47.4349C8.01159 52.0903 7.75729 56.7469 7.49549 61.4031C7.45626 62.099 7.70315 62.6457 8.29596 63.0002C8.84138 63.3258 9.41305 63.294 9.9469 62.9567C10.4699 62.6274 10.6526 62.1155 10.6856 61.5163C10.8577 58.2852 11.041 55.0547 11.216 51.8228C11.2259 51.6425 11.1899 51.4587 11.1745 51.276C11.2254 51.259 11.2772 51.2412 11.3281 51.2242C11.4364 51.3271 11.5476 51.4293 11.6519 51.5358C21.2301 61.3542 32.7588 64.8962 46.1816 62.1249C50.983 61.1335 55.3373 59.0392 59.282 56.1208C60.1746 55.4603 61.0332 54.7517 61.8818 54.0341C62.6811 53.3591 62.7726 52.3627 62.1441 51.6652C61.527 50.9805 60.5611 50.9692 59.7914 51.6392C53.5876 57.0426 46.3722 59.8415 38.1486 59.8704C30.4658 59.8969 23.5809 57.4943 17.5773 52.6821C16.2123 51.5873 14.9676 50.3417 13.6673 49.1656C13.7016 49.1082 13.7359 49.0488 13.7702 48.9913L13.7712 48.9904Z"
                  fill="#E03737"
                />
              </g>
              <path
                d="M76.6996 55.2969C76.6519 55.4879 76.5701 55.6257 76.4541 55.7103C76.3543 55.8046 76.2269 55.8715 76.0719 55.911C75.1416 56.1483 74.129 56.0625 73.0341 55.6538C72.3505 55.4016 71.7899 55.1455 71.3521 54.8856C70.9305 54.6354 70.5844 54.2765 70.3137 53.8088C69.9648 53.1961 69.7328 52.6911 69.6178 52.2938C69.5947 52.2034 69.5697 52.0515 69.5428 51.8382C69.2262 48.4927 69.8246 45.4436 71.3379 42.6909C71.3954 42.5386 71.482 42.3927 71.5978 42.2531L72.3934 41.2452C72.6424 41.2505 72.8465 41.3223 73.0056 41.4606C73.1776 41.5956 73.3516 41.792 73.5274 42.0499C73.586 42.1175 73.6251 42.1901 73.6449 42.2676C73.7009 42.4873 73.6309 42.7253 73.4348 42.9817C72.5285 44.176 71.917 45.4741 71.6003 46.8758C71.3815 47.7985 71.2337 48.6756 71.1568 49.5071C71.0799 50.3385 71.053 51.1503 71.0762 51.9425C71.0843 52.2982 71.1705 52.7441 71.3347 53.2801C71.5613 54.0067 72.0161 54.4411 72.6991 54.5834C73.3239 54.713 74.1476 54.8675 75.1704 55.047L75.884 55.1746L76.6996 55.2969ZM81.7535 37.2068C82.1095 37.2536 82.3171 37.3933 82.3764 37.6258C82.4357 37.8584 82.35 38.1967 82.1193 38.6408C81.9738 38.6642 81.7655 38.7104 81.4942 38.7796C80.8999 38.9312 80.3528 39.1602 79.853 39.4665C79.3499 39.7599 78.8505 40.1488 78.3548 40.633C78.1263 40.8701 77.9481 41.1426 77.8202 41.4504C77.7177 41.6417 77.6927 41.8407 77.7455 42.0474C77.8344 42.3962 78.1139 42.6827 78.5839 42.9069C79.0574 43.1989 79.8507 43.7465 80.9637 44.5497L81.528 44.9011C82.3357 45.4244 82.9814 45.879 83.4651 46.2647C83.9617 46.6472 84.4183 47.1156 84.8348 47.6698C85.0074 47.9148 85.1217 48.1471 85.1777 48.3667C85.3194 48.9222 85.2363 49.4869 84.9286 50.0608C84.5761 50.7286 84.1081 51.2677 83.5247 51.6779C82.9446 52.101 82.2558 52.4487 81.4584 52.7209C81.3583 52.7602 81.2389 52.8044 81.1 52.8536C80.9612 52.9027 80.8014 52.9504 80.6205 52.9965C80.5042 53.0262 80.3265 53.0577 80.0874 53.0912C79.8064 53.1766 79.4961 53.2007 79.1564 53.1635C78.8199 53.1393 78.4961 53.0567 78.185 52.9159C77.5886 52.6277 77.2262 52.2316 77.0977 51.7278C76.9889 51.3014 77.0594 50.8225 77.3092 50.2909C77.4966 50.2706 77.6148 50.3024 77.6637 50.3863C77.7222 50.4539 77.7518 50.5427 77.7523 50.6526C77.7657 50.7593 77.7807 50.8449 77.7972 50.9095C77.807 50.9483 77.8348 51.0031 77.8804 51.0741C78.4436 51.1781 79.074 51.1412 79.7717 50.9632C80.5469 50.7655 81.2439 50.4501 81.8627 50.0171C82.4912 49.5679 82.8335 49.1297 82.8897 48.7025C82.9142 48.4211 82.5793 48.0249 81.8848 47.514C81.1871 46.9902 80.4296 46.5022 79.6126 46.0501C78.8507 45.6528 78.1487 45.247 77.5064 44.8329C77.1431 44.5953 76.8264 44.2977 76.5563 43.94C76.2958 43.5661 76.1096 43.1595 75.9975 42.7203C75.8459 42.1259 75.8512 41.526 76.0132 40.9205C76.1882 40.3118 76.5365 39.762 77.058 39.2712C78.0528 38.3157 79.1574 37.6831 80.3718 37.3734C80.5398 37.3305 80.7821 37.2825 81.0988 37.2293C81.3896 37.1826 81.6078 37.1751 81.7535 37.2068ZM93.4159 47.8755C93.2864 47.8535 93.1636 47.8573 93.0473 47.887C92.931 47.9166 92.8359 47.9753 92.7619 48.063C92.6976 48.1344 92.6286 48.2415 92.5549 48.3841C92.4394 48.5787 92.3108 48.7491 92.1692 48.8953C92.0373 49.0252 91.7744 49.1817 91.3808 49.3647C91.2065 49.4366 91.0612 49.4875 90.9449 49.5171C90.4023 49.6555 89.8042 49.6842 89.1506 49.6032C88.5066 49.506 88.019 49.3208 87.6878 49.0475C87.3372 48.7516 87.1156 48.3953 87.0231 47.9786C86.8778 47.3552 86.9781 46.6691 87.3238 45.9205C87.6631 45.2009 88.0018 44.6674 88.3397 44.3197C88.6905 43.9688 89.213 43.6704 89.9071 43.4246C90.0621 43.3851 90.2752 43.3032 90.5462 43.179C90.8302 43.0516 90.9607 42.9426 90.9376 42.8522C90.8915 42.6713 90.7663 42.5312 90.5621 42.432C90.3675 42.3165 90.0248 42.3213 89.5338 42.4465C89.3529 42.4927 89.0849 42.5748 88.7297 42.6929C88.3746 42.811 88.1259 42.8882 87.9838 42.9244C87.5446 43.0364 87.2099 43.0461 86.9799 42.9534C86.9216 42.9408 86.8644 42.8246 86.8084 42.605C86.7096 42.2174 86.7826 41.9373 87.0276 41.7647C87.5304 41.4163 88.0773 41.1599 88.6683 40.9954C89.4177 40.8043 90.1517 40.796 90.8705 40.9704C91.5988 41.1287 92.1742 41.4154 92.5966 41.8305C93.0189 42.2457 93.3857 42.8745 93.6969 43.7171C94.0474 44.6597 94.4138 45.8804 94.796 47.3791C94.9015 47.7925 94.9043 48.0464 94.8045 48.1406C94.7176 48.2316 94.6289 48.2886 94.5385 48.3116C94.4222 48.3413 94.3042 48.337 94.1843 48.2988C94.0741 48.2443 93.9444 48.1673 93.7952 48.0678C93.6426 47.9553 93.5162 47.8912 93.4159 47.8755ZM90.2946 48.4239C90.8557 48.0882 91.3759 47.6459 91.8551 47.0971C91.9612 46.9737 92.0479 46.8278 92.115 46.6593C92.1821 46.4908 92.2236 46.3839 92.2396 46.3386C92.2555 46.2932 92.2469 46.1785 92.2137 45.9943C92.1901 45.7939 92.157 45.6372 92.1144 45.5242C92.0916 45.4888 92.0394 45.392 91.9578 45.2339C91.8892 45.0726 91.8061 44.9355 91.7085 44.8228C91.6176 44.7359 91.4895 44.6654 91.3243 44.6112C91.1591 44.557 91.02 44.5512 90.907 44.5938C90.6649 44.6693 90.4231 44.8273 90.1817 45.0677C89.9403 45.3082 89.7331 45.6018 89.5601 45.9487C89.3904 46.3084 89.2741 46.6615 89.211 47.0078C89.1576 47.3379 89.1639 47.6321 89.2298 47.8905C89.3446 48.2328 89.5008 48.4406 89.6984 48.5141C89.8053 48.5556 89.9234 48.5599 90.0526 48.5269C90.1559 48.5006 90.2366 48.4662 90.2946 48.4239ZM99.9299 44.1708C99.9494 44.1934 100.273 44.5718 100.901 45.3062C100.986 44.8853 100.998 44.3663 100.937 43.7489C100.885 43.1153 100.856 42.7306 100.849 42.5948C100.851 42.4428 100.854 42.3183 100.857 42.2213C100.86 42.1242 100.865 41.9027 100.873 41.5566C100.894 41.2073 100.93 40.8886 100.98 40.6005C101.015 40.3578 101.091 40.1182 101.21 39.8815C101.338 39.6287 101.49 39.4452 101.668 39.3312C101.774 39.2628 101.879 39.2154 101.982 39.1891C102.228 39.1265 102.445 39.1675 102.633 39.3121C102.834 39.4534 102.973 39.6727 103.048 39.9698C103.088 40.1249 103.108 40.2848 103.109 40.4498C103.108 41.6883 103.048 43.6645 102.928 46.3783C102.896 47.0608 102.516 47.4603 101.789 47.5769C101.062 47.6936 100.444 47.5898 99.9349 47.2656C99.4256 46.9414 98.8977 46.4362 98.3512 45.75C98.1105 45.4536 97.8045 45.0362 97.4333 44.498C97.2998 44.2981 97.0865 44.0016 96.7936 43.6084C96.7156 43.5183 96.6035 43.4024 96.4573 43.2608C96.3207 43.103 96.2166 42.9644 96.1449 42.8451C96.1058 42.8 96.0148 42.6856 95.8716 42.502C95.7414 42.315 95.6581 42.1505 95.6219 42.0084C95.6087 41.9567 95.6051 41.8888 95.6112 41.8047C95.6396 41.6461 95.7714 41.4887 96.0067 41.3323C96.2517 41.1598 96.484 41.0455 96.7036 40.9895C97.13 40.8807 97.6017 41.1388 98.1189 41.7637C98.636 42.3886 99.0346 42.8993 99.3146 43.2957L99.9299 44.1708ZM107.026 37.4075C107.139 37.3649 107.235 37.3402 107.316 37.3333C107.394 37.3136 107.465 37.2954 107.529 37.279C107.617 37.243 107.751 37.2019 107.931 37.1558C108.81 36.9317 109.74 36.9629 110.721 37.2493C111.155 37.3863 111.405 37.584 111.471 37.8424C111.543 38.1266 111.414 38.428 111.082 38.7465C110.809 39.0226 110.531 39.3344 110.248 39.6818C109.733 40.2534 109.286 40.7115 108.906 41.056C108.539 41.3973 108.108 41.6791 107.614 41.9013C107.543 41.947 107.478 42.0394 107.417 42.1788C107.366 42.3019 107.353 42.3877 107.379 42.436C107.425 42.507 107.511 42.6569 107.638 42.8859C107.762 43.102 107.885 43.2841 108.005 43.4323C108.135 43.5643 108.271 43.6671 108.414 43.7408C108.569 43.8113 108.776 43.8135 109.035 43.7476C109.293 43.6817 109.522 43.582 109.722 43.4485C110.405 42.889 111.026 42.249 111.585 41.5284C111.756 41.3336 111.919 41.2164 112.074 41.1768C112.267 41.1274 112.501 41.1781 112.773 41.3288C112.964 41.4313 113.08 41.5601 113.119 41.7152C113.162 41.8831 113.092 42.1212 112.909 42.4292C112.084 43.7817 111.052 44.616 109.812 44.9324C109.476 45.018 109.046 45.0589 108.522 45.0549C107.642 45.0591 106.892 44.7619 106.272 44.1633C105.651 43.5648 105.224 42.8068 104.99 41.8895C104.918 41.6053 104.868 41.329 104.841 41.0608C104.831 40.967 104.809 40.7731 104.775 40.479C104.751 40.1686 104.766 39.9034 104.82 39.6832C105.063 38.589 105.799 37.8305 107.026 37.4075ZM108.505 38.5161C108.253 38.4979 108.037 38.5119 107.856 38.558C107.559 38.6338 107.349 38.7836 107.227 39.0073C107.105 39.231 107.039 39.5369 107.028 39.925C107.348 39.8847 107.657 39.7231 107.957 39.4404C108.266 39.1414 108.449 38.8333 108.505 38.5161ZM121.218 30.9394C121.176 30.9364 121.128 30.935 121.073 30.9352C121.031 30.9322 120.981 30.9244 120.922 30.9117C120.495 32.204 120.176 33.166 119.966 33.7976C119.857 34.1279 119.744 34.4664 119.626 34.813C119.492 35.15 119.283 35.3547 118.999 35.4272C118.753 35.4898 118.412 35.4461 117.974 35.2962C117.702 35.2005 117.538 35.0428 117.482 34.8232C117.423 34.5906 117.468 34.3107 117.619 33.9833L118.593 31.7328L119.897 28.593C120.061 28.2074 120.329 27.9669 120.704 27.8713C120.924 27.8153 121.174 27.7995 121.456 27.8241C121.734 27.8357 121.909 27.8462 121.98 27.8555C122.216 27.8641 122.384 27.9312 122.485 28.0569C122.583 28.1696 122.661 28.3422 122.721 28.5748L122.834 29.0205C123.019 29.744 123.159 30.3756 123.256 30.9152C123.361 31.4386 123.452 31.8763 123.529 32.2285L124.203 35.4413C124.283 35.8064 124.416 36.3571 124.604 37.0935L125.084 38.9733L125.326 39.923C125.365 40.078 125.379 40.2671 125.367 40.4903C125.355 40.7135 125.332 40.8365 125.296 40.8593C124.886 40.9777 124.548 41.0294 124.283 41.0145C124.018 40.9996 123.82 40.8162 123.689 40.4643C123.568 40.1512 123.42 39.6797 123.246 39.05C122.959 38.0359 122.582 36.5016 122.113 34.4471C121.786 33.0581 121.534 32.0148 121.356 31.3171C121.343 31.2654 121.321 31.2089 121.292 31.1476C121.263 31.0863 121.238 31.0169 121.218 30.9394ZM136.943 25.9381C136.763 26.0392 136.543 26.1502 136.285 26.2711L135.215 26.6885C133.727 27.2744 132.53 27.7862 131.623 28.2238C131.488 28.2859 131.271 28.5682 130.972 29.0709C130.671 29.5606 130.422 30.0437 130.227 30.52C130.029 30.9833 129.99 31.2342 130.11 31.2724C130.139 31.2787 130.332 31.3603 130.688 31.517C131.165 31.767 131.562 31.9479 131.879 32.0595C132.057 32.1104 132.248 32.1855 132.453 32.2848C133.447 32.7328 134.059 33.4026 134.286 34.294C134.431 34.8625 134.428 35.5238 134.276 36.278C134.121 37.0193 133.901 37.6397 133.615 38.139C133.343 38.6351 132.931 38.9879 132.379 39.1975C132.091 39.312 131.812 39.4039 131.541 39.4731C130.184 39.8191 128.879 39.6911 127.624 39.0891L127.609 38.9485C127.874 38.8534 128.077 38.7878 128.219 38.7515C128.529 38.6175 128.833 38.5126 129.13 38.4368C129.388 38.3709 129.64 38.3341 129.886 38.3265C130.009 38.3227 130.18 38.2927 130.4 38.2367C130.839 38.1247 131.189 37.9322 131.45 37.6594C131.71 37.3865 131.914 37.0524 132.061 36.6572C132.304 36.1548 132.363 35.6581 132.238 35.1672C132.146 34.8054 131.984 34.4957 131.754 34.2381C131.337 33.6839 130.892 33.2607 130.418 32.9687C129.942 32.6637 129.369 32.5484 128.7 32.6227C128.473 32.6529 128.153 32.6108 127.739 32.4963C127.269 32.3821 127.015 32.275 126.975 32.1749C126.943 32.1007 126.952 32.002 127.003 31.8789C127.064 31.7396 127.162 31.5564 127.296 31.3294C127.743 30.5964 128.173 29.6404 128.588 28.4613C128.747 28.0078 128.954 27.6592 129.209 27.4155C129.476 27.1684 129.834 26.9808 130.283 26.8525C130.87 26.6751 131.708 26.3445 132.796 25.8608C133.777 25.4454 134.406 25.1886 134.684 25.0902C135.074 24.9493 135.328 24.8641 135.444 24.8344C135.509 24.8179 135.654 24.7946 135.88 24.7644L136.714 24.6343C136.782 24.6308 136.848 24.6758 136.914 24.7692C136.979 24.8627 137.029 24.9805 137.066 25.1226C137.105 25.2776 137.119 25.4393 137.107 25.6075C137.091 25.7628 137.037 25.873 136.943 25.9381ZM143.931 24.734C143.857 24.7667 143.755 24.7995 143.626 24.8324C142.863 25.0268 142.218 24.8957 141.688 24.439C141.156 23.9694 140.781 23.3632 140.564 22.6204C140.439 22.1845 140.408 21.7658 140.471 21.3645C140.552 20.8209 140.815 20.2585 141.258 19.6776C141.352 19.5575 141.566 19.4546 141.902 19.3689L142.561 19.2009C143.013 19.0855 143.516 19.1705 144.071 19.4557C144.625 19.7408 145.041 20.1027 145.318 20.5412C145.637 21.0377 145.836 21.4684 145.916 21.8335C146.064 22.5248 145.914 23.1756 145.464 23.7856C145.29 24.0225 144.96 24.2925 144.473 24.5956L144.033 24.8935L143.931 24.734ZM143.377 23.5336C143.744 23.1923 143.957 22.8145 144.017 22.4003C144.089 21.9828 144.066 21.4316 143.946 20.7466C143.893 20.5948 143.754 20.4241 143.526 20.2344C143.312 20.0414 143.061 19.8922 142.772 19.7868C142.497 19.6782 142.249 19.6519 142.03 19.7079C141.784 19.7705 141.571 19.9073 141.391 20.1184C141.221 20.3132 141.172 20.4978 141.244 20.6721C141.574 21.4822 142.031 22.4114 142.615 23.4596C142.742 23.6886 142.89 23.7817 143.058 23.7388C143.148 23.7158 143.255 23.6474 143.377 23.5336ZM142.766 33.8444C142.673 33.9645 142.536 34.1026 142.356 34.2586C142.188 34.4114 142.053 34.5285 141.95 34.6098C141.859 34.5779 141.743 34.5526 141.6 34.5339C141.455 34.5022 141.367 34.4557 141.338 34.3944C141.315 34.359 141.295 34.3089 141.279 34.2443C141.229 34.0505 141.233 33.8775 141.291 33.7252L141.579 33.0739C142.382 31.2591 143.024 29.9464 143.505 29.1356C144.989 26.3216 146.209 24.0909 147.165 22.4436C147.252 22.2977 147.356 22.0854 147.477 21.8067C147.669 21.3724 147.859 21.0352 148.045 20.795C148.244 20.5516 148.512 20.3595 148.847 20.2188C149.022 20.1469 149.174 20.0944 149.303 20.0615C149.613 19.9824 149.878 19.9698 150.098 20.0237C150.224 20.0328 150.333 20.0808 150.424 20.1677C150.524 20.2384 150.588 20.3254 150.614 20.4288C150.657 20.5967 150.622 20.7844 150.51 20.9919C149.847 22.2207 149.149 23.4513 148.418 24.6836C148.097 25.2607 147.637 26.073 147.037 27.1204C146.437 28.1677 145.911 29.0725 145.459 29.8346C144.987 30.6291 144.231 31.7645 143.19 33.2409L142.766 33.8444ZM151.08 27.596C151.687 27.4411 152.25 27.5727 152.77 27.9906C153.289 28.4085 153.646 28.9986 153.84 29.7609C154.018 30.4586 153.924 31.033 153.558 31.4843C153.204 31.9322 152.698 32.2402 152.039 32.4083C151.78 32.4742 151.483 32.5225 151.147 32.5532C150.542 32.556 149.982 32.3549 149.466 31.9499C148.946 31.532 148.606 31.0065 148.444 30.3734C148.319 29.8825 148.336 29.3828 148.496 28.8743C148.55 28.7091 148.627 28.5519 148.726 28.4027C148.835 28.2372 148.954 28.0831 149.083 27.9402C149.212 27.7973 149.305 27.6772 149.363 27.5799C149.391 27.5312 149.451 27.4954 149.542 27.4723C149.645 27.4459 149.708 27.4505 149.731 27.486C149.893 27.6372 150.059 27.7189 150.227 27.731C150.395 27.7431 150.582 27.7228 150.789 27.6701L151.08 27.596ZM151.255 30.7918C151.457 30.3963 151.502 29.9789 151.39 29.5397C151.317 29.2554 151.182 28.9941 150.983 28.7558C150.782 28.5045 150.535 28.3197 150.244 28.2014C150.126 28.548 150.123 28.941 150.235 29.3802C150.314 29.6903 150.441 29.9743 150.617 30.2321C150.793 30.49 151.006 30.6766 151.255 30.7918ZM158.34 20.8321C158.233 20.7355 158.114 20.5938 157.984 20.4069C157.866 20.2166 157.773 20.0683 157.705 19.9619C158.067 19.8697 158.367 19.8343 158.607 19.8558C158.846 19.8773 159.066 19.9587 159.268 20.1L160.061 20.7026C161.087 21.4868 161.76 21.9962 162.081 22.2307C162.565 22.6165 162.944 23.0772 163.218 23.6127C163.502 24.132 163.803 24.7983 164.12 25.6118L164.292 26.0427C164.404 26.372 164.481 26.6206 164.524 26.7886C164.889 28.2227 164.818 29.8577 164.309 31.6937C164.15 32.2572 163.848 32.7194 163.404 33.0805C162.959 33.4416 162.396 33.7434 161.715 33.9859L162.102 32.752L162.556 31.2946C163.094 29.5749 163.158 27.935 162.746 26.375C162.42 25.0959 161.782 23.8895 160.832 22.7557C160.634 22.5173 160.377 22.2938 160.063 22.0851C159.758 21.8602 159.555 21.7124 159.454 21.6417C159.299 21.5163 159.14 21.4055 158.977 21.3093C158.517 20.9589 158.304 20.7999 158.34 20.8321Z"
                className="fill-black dark:fill-white"
              />
              <defs>
                <clipPath id="clip0_218_9">
                  <rect
                    width="47.7509"
                    height="41.4225"
                    fill="white"
                    transform="matrix(0.744767 -0.667325 -0.667325 -0.744767 27.6426 84.7153)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div> */}

          {/* <Container className="mx-auto mt-10 grid max-w-6xl gap-8 md:mt-20 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Plan
                key={plan.name}
                plan={plan}
                frequency={pricingFrequency}
                onClick={() => handlePricingClick(plan)}
              />
            ))}
          </Container> */}

          <Pricing />
        </section>
      )}

      {/* contact us */}
      {false && (
        <div className="bg-black/5 dark:bg-white/5">
          <div className="mx-auto grid items-center gap-10 max-md:grid-rows-[300px,1fr] md:grid-cols-2 md:gap-14">
            <div className="mx-auto max-w-2xl px-12 py-12">
              <h1 className="text-6xl font-bold md:text-7xl lg:text-6xl">
                Connect With Us
              </h1>
              <p className="mb-8 mt-3 text-xl">
                We're always here to help and answer any questions you might
                have. Please fill out the form below, and we'll get back to you
                as soon as possible.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md bg-primary-base px-8 py-2 text-lg font-medium text-white ring-offset-white transition-colors duration-300 hover:bg-primary-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-xl dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
              >
                Contact us
              </Link>
            </div>

            <div className="h-full bg-black bg-[url('/images/contact-us-2.jpg')] bg-cover bg-center bg-no-repeat max-md:-order-1 md:min-h-[400px]"></div>
          </div>
        </div>
      )}
    </>
  );
}

function Plan(props: {
  plan: (typeof plans)[number];
  frequency: "monthly" | "annually";
  onClick?(): void;
}) {
  const { plan, frequency, onClick } = props;

  return (
    <div
      className={`rounded-2xl border border-black p-8 ${plan.popular ? "bg-black text-white dark:bg-white/90 dark:text-black/90" : "border-black/30 dark:border-white/30"}`}
    >
      <p className="text-xl font-bold">{plan.name}</p>
      <p className="mt-2 text-6xl font-bold">
        ${frequency === "monthly" ? plan.monthly : plan.yearly}
        <span className="text-3xl">
          /{frequency === "monthly" ? "mo" : "yr"}
        </span>
      </p>

      <button
        className={`mb-7 mt-10 w-full rounded-xl border px-6 py-3 ${plan.popular ? "bg-transparent hover:bg-white hover:text-black focus:bg-white focus:text-black dark:bg-black dark:text-white/80" : "hover:bg-black hover:text-white focus:bg-black focus:text-white"}`}
        onClick={onClick}
      >
        Get started
      </button>

      {/* <p className="mt-2">or ${plan.yearly} yearly</p> */}

      <hr
        className={` ${plan.popular ? "border border-white/50 dark:border-black/50" : "border-black dark:border-white/30"}`}
      />

      <p className="mt-9">Features</p>
      <div className="mt-5 flex flex-col gap-4">
        {plan.features.map((feature, index) => (
          <div
            className="flex items-center gap-4"
            key={feature.replaceAll(" ", "-") + index}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_225_25)">
                <path
                  d="M7.96723 17C7.65661 16.9559 7.34389 16.9223 7.03537 16.8678C5.09821 16.5258 3.47377 15.6109 2.16204 14.1526C1.00562 12.8664 0.296239 11.3599 0.0779672 9.64562C-0.238946 7.1508 0.409572 4.91826 2.03612 2.99417C3.32056 1.47714 4.9555 0.520338 6.91155 0.157341C9.17821 -0.264407 11.2854 0.165734 13.2162 1.43098C13.5625 1.65759 13.6528 2.08773 13.4366 2.41925C13.2204 2.74868 12.7902 2.841 12.4418 2.61229C11.5309 2.01219 10.5424 1.62402 9.45945 1.48763C7.54328 1.24423 5.795 1.68277 4.25241 2.8431C2.73081 3.98664 1.77377 5.51207 1.50933 7.39839C1.11686 10.1912 2.0655 12.4866 4.31118 14.1988C5.79291 15.3277 7.5013 15.7431 9.34821 15.5312C12.2886 15.1955 14.7483 12.9734 15.4011 10.0883C15.6655 8.91752 15.6403 7.7509 15.3192 6.59267C15.187 6.11426 15.4136 5.71979 15.8649 5.63586C16.2175 5.56872 16.5785 5.78064 16.6603 6.14994C16.782 6.69968 16.866 7.25571 16.9667 7.80965C16.9772 7.8642 16.9877 7.91666 16.9982 7.97121V9.03293C16.9898 9.0707 16.9751 9.10637 16.9709 9.14413C16.8954 10.1744 16.6519 11.1647 16.1965 12.0901C14.9099 14.7024 12.8385 16.3034 9.97784 16.8678C9.66513 16.9286 9.34612 16.958 9.0292 17H7.96723Z"
                  className={`${plan.popular ? "fill-white dark:fill-black" : "fill-black dark:fill-white"}`}
                />
                <path
                  d="M16.9997 2.25971C16.8864 2.42547 16.7961 2.61641 16.6576 2.75489C14.1307 5.28957 11.5975 7.81796 9.06845 10.3505C8.84808 10.5709 8.60043 10.6905 8.29191 10.5856C8.17648 10.5457 8.06105 10.4722 7.975 10.3862C7.04314 9.46299 6.11759 8.53556 5.19203 7.60814C4.88771 7.30179 4.87932 6.87165 5.16475 6.58419C5.45438 6.29463 5.88882 6.30513 6.19944 6.61567C6.92142 7.33327 7.63919 8.05506 8.35907 8.77476C8.40105 8.81673 8.43043 8.87338 8.4724 8.93213C8.55006 8.85869 8.59833 8.81463 8.6445 8.76847C11.0077 6.40584 13.3709 4.04322 15.7341 1.68059C16.1707 1.24415 16.7373 1.35536 16.9703 1.92189C16.9766 1.93658 16.9892 1.94497 16.9997 1.95756V2.25551V2.25971Z"
                  className={`${plan.popular ? "fill-white dark:fill-black" : "fill-black dark:fill-white"}`}
                />
              </g>
              <defs>
                <clipPath id="clip0_225_25">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function Products() {
  const images = [
    {
      img: "/images/calendar mockup.png",
      header: "Economic Calendar",
      desc: "Your go-to source for key economic events and market-moving data.",
    },
    {
      img: "/images/stock dashboard mockup.png",
      header: "Stock dashboard",
      desc: "Comprehensive Stock Dashboard for Real-Time and Historical Analysis",
    },
    {
      img: "/images/news mockup.png",
      header: "News",
      desc: "Stay informed with the latest market news and stock insights",
    },
    {
      img: "/images/calendar mockup.png",
      header: "Economic Calendar",
      desc: "Your go-to source for key economic events and market-moving data.",
    },
    {
      img: "/images/stock dashboard mockup.png",
      header: "Stock dashboard",
      desc: "Comprehensive Stock Dashboard for Real-Time and Historical Analysis",
    },
    {
      img: "/images/news mockup.png",
      header: "News",
      desc: "Stay informed with the latest market news and stock insights",
    },
  ];
  return (
    <div className="products relative py-5 lg:py-20">
      <div className="absolute bottom-0 left-0 top-0 z-10 hidden w-[20%] bg-gradient-to-r from-white from-[50%] to-transparent lg:block dark:from-black"></div>
      <div className="absolute bottom-0 right-0 top-0 z-10 hidden w-[20%] bg-gradient-to-r from-transparent to-white to-[50%] lg:block dark:to-black"></div>

      <button
        id="products-prev"
        className="-transtate-y-1/2 absolute left-20 top-1/2 z-20 hidden lg:block"
      >
        <FiChevronLeft className="size-20" />
      </button>
      <button
        id="products-next"
        className="-transtate-y-1/2 absolute right-20 top-1/2 z-20 hidden lg:block"
      >
        <FiChevronRight className="size-20" />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: "#products-prev",
          nextEl: "#products-next",
        }}
        spaceBetween={0}
        loop
        centeredSlides
        className="!py-20"
        breakpoints={{
          0: {
            slidesPerView: "auto",
            spaceBetween: "24px",
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={img.header + index} className="z-[1] max-lg:px-6">
            <div className="relative aspect-video w-full">
              <Image src={img.img} alt="" className="" fill />
            </div>
            <div className="mt-6 lg:mt-20">
              <h1 className="text-center text-2xl font-semibold lg:text-4xl">
                {img.header}
              </h1>
              <p className="mt-2 text-center text-base max-lg:px-3 lg:mt-7 lg:text-xl">
                {img.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
