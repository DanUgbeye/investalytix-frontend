"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FiChevronLeft } from "react-icons/fi";
import { ImCheckmark } from "react-icons/im";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const updateEmailHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  return (
    <>
      <main className="flex items-center justify-center px-10 py-20">
        {sent ? (
          <MailSent email={email} />
        ) : (
          <ForgotPassword email={email} onChange={updateEmailHandler} />
        )}
      </main>
    </>
  );
}

function ForgotPassword({
  email,
  onChange,
}: {
  email: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="z-10 flex flex-col">
      <Link
        href="/login"
        className="flex items-center justify-start gap-2 text-[#252525] dark:text-white"
      >
        <FiChevronLeft />
        Back
      </Link>

      <form
        onSubmit={submitHandler}
        className="auth__card__shadow mt-8 rounded bg-white dark:bg-white/10 px-8 py-8 md:px-16 md:py-12"
      >
        <h1 className="mb-4 text-2xl font-bold text-[#3C4257] dark:text-white">
          Change your password
        </h1>

        <p className="mb-4 max-w-[40ch] text-[#3C4257] dark:text-white">
          Please enter your{" "}
          <span className="text-primary-base">email address</span> to help us
          locate your Investalytix account.
        </p>

        <div className="w-full lg:min-w-[300px]">
          <label htmlFor="email" className="mb-3 text-[#3C4257] dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="johndoe@investalix.com"
            className="w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none"
          />
        </div>

        <input
          type="submit"
          value="Continue"
          className="mt-7 w-full cursor-pointer rounded bg-primary-base py-4 text-white"
        />
      </form>
    </div>
  );
}

function MailSent({ email }: { email: string }) {
  async function resendEmailHandler() {}
  return (
    <div className="auth__card__shadow max-w-xl rounded bg-white dark:bg-white/10 px-8 py-8 md:px-16 md:py-12">
      <svg
        className="mx-auto"
        width={219}
        height={172}
        viewBox="0 0 219 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.57">
          <path
            d="M129.24 16.8676C114.554 48.8069 41.8429 60.1696 21.7645 67.6038C1.68698 75.038 45.3563 151.704 110.297 167.29C175.237 182.876 226.208 79.5324 201.776 47.1666C177.344 14.8008 147.269 -22.3474 129.239 16.8676H129.24Z"
            fill="#B4B1F4"
          />
        </g>
        <g opacity="0.57">
          <path
            d="M188.717 152.273C191.314 132.55 210.2 107.73 217.783 116.87C225.365 126.011 182.819 197.072 188.717 152.273Z"
            fill="#B4B1F4"
          />
        </g>
        <g opacity="0.57">
          <path
            d="M0.95383 104.288C5.27162 79.8127 39.1193 130.971 29.1678 135.036C19.2164 139.102 -3.82866 131.397 0.95383 104.288Z"
            fill="#B4B1F4"
          />
        </g>
        <path
          d="M175.929 153.095C176.696 152.84 183.129 63.6746 183.129 62.4819C183.129 61.2891 180.488 57.4541 179.976 57.0286C179.465 56.602 40.9559 65.3292 39.2517 65.8407C38.8356 65.9657 31.0712 151.05 31.242 151.392C31.4128 151.733 35.6734 154.545 36.8661 154.63C37.4406 154.671 68.5945 154.376 100.852 154.031L102.528 163.222C96.2837 163.587 68.2605 165.234 67.2004 165.537C66.0076 165.878 64.3454 171.886 64.3454 171.886C64.3454 171.886 115.6 171.971 117.048 171.886C118.497 171.801 146.616 169.329 146.616 169.329C146.616 169.329 147.128 163.663 146.191 163.152C145.62 162.841 129.994 162.908 117.87 163.009L116.203 153.864C145.493 153.539 175.591 153.209 175.929 153.096L175.929 153.095Z"
          fill="url(#paint0_linear_1415_31441)"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.7">
          <path
            d="M38.9888 145.584L45.0127 71.4876L172.529 63.7661L164.827 144.59L38.9888 145.584Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M111 157.1L112.363 164.479L118.499 164.599L117.871 163.007L116.204 153.863C145.494 153.537 175.592 153.207 175.931 153.095C176.698 152.839 183.131 63.6739 183.131 62.4811C183.131 61.2884 180.49 57.4534 179.978 57.0278C178.657 57.0393 170.818 150.113 170.818 150.113L31.2432 151.39C31.414 151.731 35.6745 154.543 36.8673 154.628C37.4417 154.669 68.5956 154.374 100.854 154.03L101.283 156.387L111 157.098V157.1Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M64.3462 171.885C64.3462 171.885 115.601 171.97 117.049 171.885C118.497 171.8 146.617 169.328 146.617 169.328C146.617 169.328 147.128 163.662 146.191 163.151C138.098 162.93 115.09 167.667 115.09 167.667C115.09 167.667 74.019 165.111 67.2021 165.537C66.0094 165.878 64.3471 171.886 64.3471 171.886L64.3462 171.885Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M38.9891 145.583H37.3784L43.8422 69.8852L172.926 62.2458L172.392 65.2058L45.7879 72.2879L39.8889 145.583H38.9891Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M117.049 171.884C113.386 171.912 114.011 167.822 119.106 166.873C124.2 165.923 141.249 166.217 143.635 166.217C146.02 166.217 146.616 169.327 146.616 169.327L117.048 171.883L117.049 171.884Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M100.851 154.03L116.201 153.863L116.515 155.585C116.515 155.585 114.151 156.759 113.98 157.355C113.809 157.952 112.501 165.238 112.237 163.807C111.972 162.376 110.572 155.651 110.572 155.651L101.28 156.388L100.851 154.031V154.03Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M175.928 153.095C175.928 153.095 170.567 153.031 170.845 149.752C171.124 146.475 174.666 106.132 174.868 103.914C175.072 101.697 177.509 133.16 177.291 137.842C177.074 142.524 175.928 153.095 175.928 153.095Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M179.515 58.8833C179.222 60.9559 179.25 116.022 180.524 98.7243C181.799 81.4265 182.85 63.5628 182.49 61.8347C182.128 60.1066 179.931 55.9396 179.515 58.8824V58.8833Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.43">
          <path
            d="M164.869 145.916C163.917 152.303 171.292 106.094 171.889 100.555C172.485 95.0169 173.731 50.278 172.169 68.0997C170.606 85.9214 164.869 145.916 164.869 145.916Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.43">
          <path
            d="M38.7019 70.2938C39.2534 65.8395 42.8317 78.1956 41.7239 87.9943C40.616 97.7931 31.3354 149.168 32.8011 132.987C34.2667 116.807 38.7009 70.2928 38.7009 70.2928L38.7019 70.2938Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.43">
          <path
            d="M97.3669 145.123C85.5224 145.217 117.304 149.176 128.126 148.154C138.947 147.131 155.731 144.663 148.319 144.721C140.906 144.78 97.366 145.123 97.366 145.123H97.3669Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.43">
          <path
            d="M102.526 163.222L102.774 164.386C102.774 164.386 125.354 164.854 128.294 164.599C131.234 164.343 115.087 167.666 115.087 167.666L72.6953 165.444L102.527 163.222H102.526Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.15">
          <path
            d="M69.9272 145.34C56.8088 145.443 90.7185 103.759 121.394 87.74C152.07 71.7208 167.734 91.5693 167.578 104.458C167.421 117.346 164.825 144.592 164.825 144.592L69.9263 145.34H69.9272Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.15">
          <path
            d="M43.1018 105.627C40.784 122.333 147.167 66.6535 130.531 67.8224C113.895 68.9922 45.785 72.2881 45.785 72.2881L43.1018 105.627Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.43">
          <path
            d="M94.7629 145.143C91.4012 145 110.233 148.324 115.345 146.96C120.458 145.596 121.821 144.929 121.821 144.929L94.7629 145.143Z"
            fill="#460046"
          />
        </g>
        <g style={{ mixBlendMode: "screen" }} opacity="0.43">
          <path
            d="M78.1997 165.733C78.1997 165.733 94.0415 164.94 96.0014 164.94C97.9613 164.94 114.066 167.533 114.066 167.533L78.1997 165.733Z"
            fill="#460046"
          />
        </g>
        <g opacity="0.67">
          <path
            opacity="0.51"
            d="M159.096 100.506L111.062 102.121L111.72 92.4903L159.942 90.0322L159.096 100.506Z"
            fill="white"
          />
          <path
            opacity="0.51"
            d="M158.069 113.238L110.265 113.836L110.918 104.263L158.909 102.835L158.069 113.238Z"
            fill="white"
          />
          <path
            d="M118.646 97.145C119.129 96.7566 119.461 96.1822 119.506 95.5515C119.584 94.437 118.735 93.5782 117.614 93.6326C116.497 93.687 115.532 94.6278 115.456 95.7337C115.406 96.4523 115.744 97.0639 116.291 97.3931C114.83 98.3578 114.349 100.645 114.349 100.645L119.92 100.444C119.92 100.444 120.421 97.8502 118.646 97.146V97.145Z"
            fill="white"
          />
          <path
            d="M112.607 108.788C115.631 105.28 118.024 105.137 121.563 108.595C121.563 108.595 120.349 111.704 116.542 111.688C112.785 111.673 112.607 108.788 112.607 108.788ZM116.365 110.582C119.076 110.958 119.552 107.174 117.155 107.194C114.778 107.213 113.405 110.171 116.365 110.582Z"
            fill="white"
          />
          <path
            d="M125.662 98.3384C127.077 98.4443 128.036 94.9423 125.893 95.1275C123.766 95.3107 123.366 98.1666 125.662 98.3384Z"
            fill="white"
          />
          <path
            d="M135.686 94.6907C134.227 94.5924 133.244 98.1326 135.443 97.957C137.657 97.7805 138.084 94.851 135.686 94.6907Z"
            fill="white"
          />
          <path
            d="M130.5 98.1335C132.901 98.3482 131.884 95.0199 130.736 94.914C129.592 94.8081 128.118 97.9207 130.5 98.1335Z"
            fill="white"
          />
        </g>
        <g opacity="0.68">
          <path
            opacity="0.82"
            d="M58.5635 98.7361L57.6284 127.716L103.649 127.531L106.135 97.4451L58.5635 98.7361Z"
            fill="white"
          />
          <path
            d="M58.2749 106.747L105.501 105.651L106.135 97.4451L58.564 98.7361L58.2749 106.747Z"
            fill="#4A7AE6"
          />
          <path
            d="M98.5179 104.461C101.252 104.633 103.205 104.461 103.801 104.461C104.398 104.461 105.218 99.5326 104.688 99.0688C104.157 98.606 99.5208 98.6709 98.9168 99.0688C98.3128 99.4667 98.5179 104.461 98.5179 104.461Z"
            fill="#FA4690"
          />
          <path
            opacity="0.51"
            d="M90.5767 103.428C90.4641 103.719 90.1702 104.486 90.3973 104.538C90.6244 104.59 96.0377 105.003 96.093 104.538C96.1493 104.074 96.5443 103.364 96.2476 103.428C95.9508 103.493 90.5767 103.428 90.5767 103.428Z"
            fill="white"
          />
          <path
            opacity="0.51"
            d="M103.485 102.848C103.413 102.807 103.05 102.407 102.608 101.903C103.207 101.488 103.65 101.092 103.53 100.89C103.217 100.365 102.923 99.4303 102.795 99.6268C102.742 99.7079 102.158 100.135 101.492 100.608C101.013 100.047 100.637 99.6001 100.637 99.6001C100.301 99.7709 99.4154 100.223 99.4794 100.396C99.5023 100.457 99.8114 100.931 100.22 101.5C99.7647 101.816 99.4326 102.044 99.4326 102.044C99.5815 102.405 99.9794 103.359 100.153 103.318C100.211 103.304 100.656 103.08 101.202 102.772C101.699 103.36 102.158 103.791 102.341 103.658C102.815 103.315 103.697 102.967 103.486 102.848H103.485Z"
            fill="white"
          />
          <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
            <path
              d="M66.8622 111.441L66.6475 112.698L93.8777 112.719L94.1449 111.15L66.8622 111.441Z"
              fill="#49258D"
            />
          </g>
          <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
            <path
              d="M66.1636 117.156L66.9489 118.428L93.0112 118.385L93.2058 117.243L66.1636 117.156Z"
              fill="#49258D"
            />
          </g>
          <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
            <path
              d="M65.9312 119.288L66.4397 120.313L90.2615 120.601L90.5545 119.354L65.9312 119.288Z"
              fill="#49258D"
            />
          </g>
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M58.3641 98.1067C58.0883 104.269 54.7963 107.065 58.3641 108.003C61.9319 108.942 136.056 108.22 137.333 104.455C138.612 100.69 140.662 68.8316 140.404 66.9948C140.145 65.157 137.867 66.2963 137.856 64.3211C137.845 62.3459 137.998 59.3516 137.998 59.3516L125.282 60.1331L58.3641 98.1067Z"
            fill="#49258D"
          />
        </g>
        <path
          d="M52.388 57.5407C50.8174 57.7774 50.5034 95.7558 50.5034 97.397C50.5034 99.0383 53.2334 101.086 54.1418 101.07C55.0493 101.055 103.13 101.693 131.964 98.9858C131.964 98.9858 135.41 55.0922 134.677 53.1733C133.941 51.2468 98.2243 25.0338 96.709 24.6091C95.1899 24.1836 92.146 23.2007 90.5658 24.4421C88.9857 25.6826 58.1791 56.7163 57.3976 56.9577C56.6161 57.2001 52.388 57.5398 52.388 57.5398V57.5407Z"
          fill="url(#paint1_linear_1415_31441)"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M52.3897 57.541C50.8029 56.8502 63.8173 69.2072 70.72 73.4257C73.5206 75.1376 78.9873 77.3189 80.9625 77.9658C81.9234 78.2807 82.973 78.1471 83.8232 77.5994C83.8232 77.5994 69.721 58.896 69.3374 58.7681C68.9538 58.6403 52.3907 57.542 52.3907 57.542L52.3897 57.541Z"
            fill="#49258D"
          />
        </g>
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.31"
          d="M54.1405 101.069C55.048 101.054 103.129 101.693 131.963 98.9855C131.963 98.9855 135.408 55.0919 134.676 53.173C133.94 51.2465 98.223 25.0334 96.7077 24.6088C95.7755 24.3474 94.2688 23.8779 92.8776 23.8407C92.8022 23.8464 92.7316 23.8464 92.6648 23.8407C92.6533 23.8407 92.6419 23.8407 92.6304 23.8407C90.7697 23.7233 131.195 53.0146 131.195 53.0146C131.17 53.0662 131.146 53.1463 131.123 53.2398C129.949 52.9583 128.259 52.9831 125.267 53.6091C124.196 53.8333 127.866 57.2647 130.681 59.7332C130.322 71.7763 130.555 95.5761 130.555 95.5761C130.555 95.5761 52.2779 96.0532 50.7397 98.3013C51.423 99.7011 53.3934 101.082 54.1386 101.069L54.1405 101.069Z"
          fill="url(#paint2_linear_1415_31441)"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M52.3887 57.5408C53.6664 57.4301 83.3098 77.769 83.8212 77.5982C84.3327 77.4274 122.336 55.3967 123.699 54.3127C125.063 53.2278 128.458 53.1142 128.458 53.1142C128.458 53.1142 92.9816 29.6674 91.1925 29.2418C89.4033 28.8163 57.3992 56.9587 57.3992 56.9587L52.3896 57.5408H52.3887Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M56.5596 97.3678C52.5328 97.6083 89.0083 101.327 105.761 100.523C122.514 99.7199 136.311 95.5319 130.558 95.5768C124.805 95.6216 70.7973 96.5167 56.5596 97.3678Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M130.684 59.7331C130.771 58.5098 133.299 60.4373 133.839 62.4812C134.38 64.5251 130.54 95.7449 130.515 89.6103C130.489 83.4757 130.684 59.7321 130.684 59.7321V59.7331Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.13">
          <path
            d="M87.2615 75.6562C85.2796 76.7879 127.812 60.4471 127.531 58.51C127.251 56.5739 124.582 53.7571 124.14 54.0338C123.697 54.3115 87.2615 75.6552 87.2615 75.6552V75.6562Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.13">
          <path
            d="M54.2196 58.4571C54.1242 57.8713 70.9746 54.8684 83.8201 54.5487C96.6657 54.229 103.983 65.8599 103.983 65.8599L83.8201 77.5976L54.2196 58.4571Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.13">
          <path
            d="M93.3628 30.5191C89.0135 28.6603 87.419 47.7951 96.3027 54.0155C105.185 60.236 126.911 52.0938 126.911 52.0938L93.3637 30.5191H93.3628Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M131.197 53.015C132.134 53.4836 133.771 52.1582 133.303 51.7641C126.382 45.9425 105.155 30.3975 105.155 30.3975C105.155 30.3975 114.692 40.9777 121.188 45.7201C127.685 50.4625 131.197 53.015 131.197 53.015Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.13">
          <path
            d="M56.5598 97.3674C49.7792 98.3884 89.2949 74.0122 101.427 67.348C113.558 60.6838 129.28 95.5763 129.28 95.5763L56.5598 97.3674Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M55.2398 59.1165C54.2207 58.4571 89.7506 70.6108 90.6199 70.8666C91.4901 71.1223 109.986 62.481 109.986 62.481L83.8211 77.5985C83.4271 77.4592 81.5396 79.5909 77.7075 75.191C73.8754 70.7912 62.5805 63.7654 62.5805 63.7654L55.2398 59.1165Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.13">
          <path
            d="M119.693 56.8066C119.693 56.8066 100.058 74.1227 88.4873 74.8803L119.693 56.8066Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M80.4312 34.3672C95.4074 30.6468 105.21 31.2384 110.488 34.3271C115.765 37.4159 121.585 40.2776 121.993 47.6679C122.4 55.0583 121.787 55.418 121.787 55.418L117.306 58.3341L80.4312 34.3653V34.3672Z"
            fill="#49258D"
          />
        </g>
        <path
          d="M58.472 36.5263C58.472 36.5263 79.7041 32.8402 97.6546 33.2772C115.605 33.7142 116.202 34.6475 117.309 34.8841C118.417 35.1207 120.079 38.3164 120.207 39.0826C120.335 39.8498 119.696 56.8061 119.696 56.8061C105.157 66.2556 83.8224 77.5973 83.8224 77.5973C83.8224 77.5973 68.6553 68.267 60.2478 62.2441C60.2478 62.2441 57.8327 40.8708 58.472 36.5253V36.5263Z"
          fill="#DFCDE7"
        />
        <path
          style={{ mixBlendMode: "color-dodge" }}
          opacity="0.37"
          d="M61.4944 63.1592C58.7272 60.6821 74.025 36.4605 86.7456 36.909C106.69 37.6113 112.419 61.1478 112.419 61.1478L83.8219 77.5973L61.4953 63.1602L61.4944 63.1592Z"
          fill="url(#paint3_linear_1415_31441)"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.31"
          d="M119.693 56.8062C119.693 56.8062 120.333 39.849 120.205 39.0827C120.077 38.3156 118.416 35.1209 117.307 34.8842C117.211 34.8642 117.12 34.8384 117.021 34.8088C115.652 35.7516 117.307 58.3367 117.307 58.3367C117.307 58.3367 89.2731 73.9772 87.1948 73.9772C85.1165 73.9772 60.2451 62.2461 60.2451 62.2461C68.6517 68.2681 83.8198 77.5993 83.8198 77.5993C83.8198 77.5993 105.154 66.2576 119.693 56.8081V56.8062Z"
          fill="url(#paint4_linear_1415_31441)"
        />
        <path
          style={{ mixBlendMode: "color-dodge" }}
          opacity="0.26"
          d="M60.1951 37.8273C61.4947 36.5992 85.0551 33.7375 86.014 33.7375C86.973 33.7375 76.4281 34.8883 68.9509 38.4027C61.4737 41.918 61.3153 59.7397 60.5653 57.2798C59.8153 54.8189 57.9632 39.937 60.1961 37.8273H60.1951Z"
          fill="url(#paint5_linear_1415_31441)"
        />
        <path
          style={{ mixBlendMode: "color-dodge" }}
          opacity="0.26"
          d="M94.8974 33.7375C98.7314 34.2251 109.724 37.2929 111.897 39.5935C114.069 41.8941 115.604 57.4744 116.242 54.5412C116.881 51.6089 116.007 35.374 115.219 34.8072C114.432 34.2413 94.8965 33.7366 94.8965 33.7366L94.8974 33.7375Z"
          fill="url(#paint6_linear_1415_31441)"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
          <path
            d="M67.0308 45.0895V47.6687L107.364 45.6248V42.4053L67.0308 45.0895Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
          <path
            d="M63.582 51.6079L64.1297 54.9076L109.984 53.1137V49.6909L63.582 51.6079Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
          <path
            d="M67.0308 56.8068L68.0365 59.3517L107.187 57.2505V54.908L67.0308 56.8068Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
          <path
            d="M68.0371 61.1407L68.7232 63.1999L105.681 61.9155L105.761 59.3516L68.0371 61.1407Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.39">
          <path
            d="M69.4655 68.4912L69.4111 67.1601L97.0698 66.5007V68.3338L70.7613 69.3357L69.4655 68.4912Z"
            fill="#49258D"
          />
        </g>
        <path
          style={{ mixBlendMode: "color-dodge" }}
          opacity="0.75"
          d="M40.7056 136.114L39.8926 145.338L164.831 144.345L165.765 134.84L40.7056 136.114Z"
          fill="url(#paint7_linear_1415_31441)"
        />
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.75">
          <path
            d="M49.1398 137.756L48.4585 143.209L85.1297 142.538L85.352 137.694L49.1398 137.756Z"
            fill="#9BC8E2"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.75">
          <path
            d="M142.058 137.308H146.83L145.722 142.037H141.292L142.058 137.308Z"
            fill="#9BC8E2"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.75">
          <path
            d="M149.896 137.308V142.037H158.418L159.014 137.308H149.896Z"
            fill="#9BC8E2"
          />
        </g>
        <path
          d="M44.3282 15.873C46.3692 13.5934 48.7653 10.5838 50.3836 10.1239C52.001 9.66398 60.0554 27.6479 59.1967 27.9809C58.3379 28.314 56.3407 29.9743 54.4352 28.7758C52.5296 27.5783 42.3444 18.0877 44.3282 15.8721V15.873Z"
          fill="#FDBD15"
        />
        <path
          d="M64.6053 25.5342C63.4298 24.7632 60.1044 16.4597 60.2456 15.5646C60.3868 14.6696 66.9966 14.1591 68.0376 14.6696C69.0787 15.181 69.0415 25.0227 68.0376 25.5342C67.0338 26.0456 65.2017 25.9254 64.6053 25.5342Z"
          fill="#FDBD15"
        />
        <path
          d="M51.1592 10.6301C50.5619 9.92113 54.2976 22.8688 54.8587 24.7342C55.4197 26.5997 54.5667 28.7324 55.5352 28.7829C56.5037 28.8345 59.9522 28.9385 59.6507 27.0043C59.3492 25.0701 53.6917 13.6359 51.1592 10.6291V10.6301Z"
          fill="#DF8103"
        />
        <path
          d="M65.8794 14.4696C65.116 14.4944 66.3288 22.8408 66.137 23.8361C65.9452 24.8313 64.6742 25.9067 65.8908 25.859C67.1074 25.8113 68.1237 26.0622 68.6609 25.0222C69.199 23.983 68.741 16.0526 68.5015 15.0526C68.262 14.0526 65.8794 14.4686 65.8794 14.4686V14.4696Z"
          fill="#DF8103"
        />
        <path
          d="M49.9923 35.8531C49.165 36.2491 44.9627 34.7959 44.7623 34.3331C44.5619 33.8703 48.2404 29.0143 48.9207 28.5916C49.6011 28.1689 52.5763 32.3283 52.2251 33.1575C51.8749 33.9867 50.4131 35.6518 49.9923 35.8531Z"
          fill="#FDBD15"
        />
        <path
          d="M47.2707 30.4219C46.8928 30.8999 50.0436 33.6652 50.2497 34.2005C50.4558 34.7358 50.1419 35.9668 50.7411 35.2015C51.3404 34.4362 52.4301 33.3265 52.3852 32.5603C52.3404 31.794 49.6972 28.7415 49.2726 28.4677C48.848 28.1938 47.2707 30.4219 47.2707 30.4219Z"
          fill="#DF8103"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M170.647 95.3185C174.172 95.7928 174.566 95.1716 176.038 98.538C177.509 101.904 179.76 110.809 180.764 92.9788C181.767 75.1485 170.648 95.3195 170.648 95.3195L170.647 95.3185Z"
            fill="#49258D"
          />
        </g>
        <path
          d="M169.807 67.8731C196.906 67.8292 187.573 96.1463 170.446 95.2321C153.319 94.3171 152.309 67.9017 169.807 67.8731Z"
          fill="#FDBD15"
        />
        <path
          d="M173.847 68.1062C188.091 71.5242 178.566 101.357 161.276 91.2419C163.478 93.4872 166.542 95.0244 170.447 95.2324C186.657 96.0979 195.878 70.7847 173.848 68.1062H173.847Z"
          fill="#DF8103"
        />
        <path
          d="M167.971 94.9033C166.396 94.5741 172.857 94.0655 177.329 88.3765C181.8 82.6866 185.975 83.7524 183.76 88.1408C181.544 92.5292 174.848 96.3413 167.971 94.9042V94.9033Z"
          fill="#DF4F03"
        />
        <path
          d="M179.541 72.2054C177.889 69.1043 182.001 70.0757 184.371 73.3133C186.741 76.5509 187.313 80.7122 184.371 82.7714C181.429 84.8306 181.628 76.1253 179.541 72.2054Z"
          fill="#DF4F03"
        />
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.24">
          <path
            d="M179.999 73.5837C179.198 70.785 181.48 86.246 172.277 89.205C163.073 92.164 158.743 87.2833 160.077 89.8415C161.412 92.3997 167.571 94.2757 172 92.603C176.43 90.9302 182.864 83.5895 179.998 73.5837H179.999Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.24">
          <path
            d="M157.708 80.4499C157.747 84.8421 178.483 72.8306 176.052 69.9298C173.621 67.029 157.58 66.1979 157.708 80.4499Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.6">
          <path
            d="M167.798 82.6081C168.565 82.7904 169.658 83.0099 170.876 81.9927C172.093 80.9755 172.902 71.3848 169.89 71.7054C164.568 72.2722 166.45 82.2866 167.798 82.6081Z"
            fill="white"
          />
          <path
            d="M169.852 86.753C174.335 86.7139 175.697 84.2511 175.142 83.1451C174.588 82.0392 172.75 80.7691 172.75 81.9924C172.75 83.2157 172.516 85.6633 169.126 85.8513C165.735 86.0392 165.399 84.7215 165.78 83.1594C166.16 81.5974 166.073 81.564 164.29 82.1804C163.869 82.3264 162.861 82.7138 163.357 84.1222C163.776 85.3131 164.933 86.3952 167.987 86.6786C168.122 87.2444 168.014 88.649 167.849 88.6738C167.645 88.7053 164.786 88.8818 164.844 89.233C164.903 89.5841 165.022 90.7263 165.78 90.9553C166.536 91.1843 171.708 91.2473 172.098 90.5565C172.489 89.8666 173.261 88.4801 172.962 88.3885C172.663 88.2978 169.6 88.8618 169.6 88.6108C169.6 88.4209 169.772 87.3026 169.835 86.752C169.842 86.752 169.846 86.752 169.853 86.752L169.852 86.753Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M166.659 132.3C170.538 132.774 170.972 132.153 172.591 135.519C174.21 138.885 176.688 147.79 177.792 129.959C178.896 112.129 166.659 132.3 166.659 132.3Z"
            fill="#49258D"
          />
        </g>
        <path
          d="M183.623 115.504C183.674 142.603 150.781 133.27 151.844 116.143C152.907 99.0162 183.591 98.0057 183.623 115.504Z"
          fill="#2FC260"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.57">
          <path
            d="M169.942 102.873C173.75 103.223 180.312 105.371 179.484 115.324C178.448 127.763 168.252 132.96 157.632 128.197C166.818 135.63 183.662 134.902 183.626 115.504C183.611 107.437 177.081 103.307 169.943 102.873H169.942Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M170.326 132.409C166.907 132.547 176.462 124.548 179.305 122.631C182.149 120.714 182.82 122.247 181.734 124.836C180.647 127.424 177.721 132.11 170.326 132.409Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.31">
          <path
            d="M178.567 105.919C177.622 105.512 180.133 110.013 179.685 115.907C179.238 121.8 184.39 119.232 183.539 113.998C182.688 108.764 180.196 106.622 178.567 105.92V105.919Z"
            fill="#49258D"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.24">
          <path
            d="M179.483 112.895C179.05 109.848 178.406 121.248 171.794 125.316C165.181 129.384 157.378 127.892 159.32 128.872C161.262 129.852 168.929 131.051 173.764 127.091C178.599 123.131 179.94 116.094 179.483 112.895Z"
            fill="white"
          />
        </g>
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.24">
          <path
            d="M152.144 117.886C152.076 120.193 176.876 104.469 170.294 103.74C163.712 103.01 152.527 104.898 152.144 117.886Z"
            fill="white"
          />
        </g>
        <path
          opacity="0.6"
          d="M162.36 117.613C162.884 117.071 168.115 112.816 167.783 113.314C167.451 113.812 164.408 118.597 164.187 119.193C163.965 119.788 167.083 126.523 167.461 125.977C167.839 125.431 173.095 110.657 172.597 109.551C172.099 108.444 155.609 113.258 155.831 114.089C156.052 114.919 161.817 118.177 162.36 117.613Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1415_31441"
            x1="31.2392"
            y1="114.468"
            x2="183.129"
            y2="114.468"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#773960" />
            <stop offset="0.02" stopColor="#75375F" />
            <stop offset="0.44" stopColor="#4F194F" />
            <stop offset="0.79" stopColor="#370646" />
            <stop offset={1} stopColor="#2F0043" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1415_31441"
            x1="92.6412"
            y1="114.834"
            x2="92.6412"
            y2="49.7802"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DCD6EA" />
            <stop offset={1} stopColor="#B195C9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1415_31441"
            x1="92.7602"
            y1="101.124"
            x2="92.7602"
            y2="23.8397"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#49258D" />
            <stop offset={1} stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1415_31441"
            x1="86.7923"
            y1="88.6976"
            x2="86.7923"
            y2="13.2828"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.04" stopColor="#EEEEEE" />
            <stop offset="0.18" stopColor="#B0B0B0" />
            <stop offset="0.33" stopColor="#7A7A7A" />
            <stop offset="0.47" stopColor="#4E4E4E" />
            <stop offset="0.6" stopColor="#2C2C2C" />
            <stop offset="0.73" stopColor="#131313" />
            <stop offset="0.85" stopColor="#050505" />
            <stop offset="0.94" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1415_31441"
            x1="90.234"
            y1="77.5974"
            x2="90.234"
            y2="34.8079"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#49258D" />
            <stop offset={1} stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1415_31441"
            x1="60.5901"
            y1="57.4534"
            x2="77.2287"
            y2="28.6354"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.06" />
            <stop offset="0.15" stopColor="#050505" />
            <stop offset="0.27" stopColor="#131313" />
            <stop offset="0.4" stopColor="#2C2C2C" />
            <stop offset="0.53" stopColor="#4E4E4E" />
            <stop offset="0.67" stopColor="#7A7A7A" />
            <stop offset="0.82" stopColor="#B0B0B0" />
            <stop offset="0.96" stopColor="#EEEEEE" />
            <stop offset={1} stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1415_31441"
            x1="94.8974"
            y1="44.3226"
            x2="116.463"
            y2="44.3226"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.06" />
            <stop offset="0.15" stopColor="#050505" />
            <stop offset="0.27" stopColor="#131313" />
            <stop offset="0.4" stopColor="#2C2C2C" />
            <stop offset="0.53" stopColor="#4E4E4E" />
            <stop offset="0.67" stopColor="#7A7A7A" />
            <stop offset="0.82" stopColor="#B0B0B0" />
            <stop offset="0.96" stopColor="#EEEEEE" />
            <stop offset={1} stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1415_31441"
            x1="39.8926"
            y1="140.089"
            x2="165.765"
            y2="140.089"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5D82BE" />
            <stop offset="0.37" stopColor="#00368D" />
            <stop offset={1} stopColor="#8E248D" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="my-4 text-center text-2xl font-bold text-[#3C4257] dark:text-white">
        Email Verification
      </h1>

      <p className="px-7 text-[#3C4257] dark:text-white">
        We have sent a mail to{" "}
        <span className="text-primary-base">{email}</span>, Please click the
        link to confirm your email address.
      </p>

      <div className="my-4 h-[0.5px] w-full bg-[#9D9D9D]"></div>

      <p className="px-7 text-[#485567] dark:text-white">
        If you did not receive any mail,{" "}
        <button className="text-[#125BD4] dark:text-[#a4c7ff]" onClick={resendEmailHandler}>
          Resend Confirmation
        </button>
      </p>
    </div>
  );
}
