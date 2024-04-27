"use client";

interface DividendsScreenProps {
  ticker: string;
}

export default function DividendsScreen(props: DividendsScreenProps) {
  const { ticker } = props;

  return (
    <section className=" max-w-6xl space-y-12 py-12 ">
      <header className="relative w-full ">
        <div className=" flex w-full py-4 ">
          <h2 className=" white-text text-xl font-bold text-[#2A3037] sm:text-3xl">
            Apple Dividend
          </h2>
        </div>

        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white"></div>
      </header>

      <div className=" space-y-5 border py-3  ">
        <h4 className=" px-4 text-lg font-bold sm:text-2xl ">Data</h4>

        <div className=" white-text flex flex-col divide-y text-gray-700 xl:flex-row xl:divide-x xl:divide-y-0 ">
          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Last Ex-Dividend Date</span>
            <span className="  ">2023-11-16</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Amount Per Share</span>
            <span className="  ">$0.24</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Yield</span>
            <span className="  ">0.5</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Payout Ratio</span>
            <span className="  ">15.49%</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Growth</span>
            <span className="  ">1.57%</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">P/E</span>
            <span className="  ">31.4</span>
          </div>
        </div>
      </div>

      <div className=" border ">
        <h4 className=" border-b px-4 py-5 text-lg font-bold sm:text-2xl ">
          Dividend Yield Range
        </h4>

        <div className=" overflow-x-auto pb-10 ">
          <svg
            width="955"
            height="281"
            viewBox="0 0 955 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="64.2289"
              y="54.6058"
              width="831.732"
              height="210.204"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="1.3 1.3"
            />
            <path
              d="M63.5801 98.0742H896.61"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M63.5801 139.598H896.61"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M63.5801 182.414H896.61"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M63.5801 225.234H896.61"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M273.783 53.957L273.783 265.458"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M478.797 53.957L478.797 265.458"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M689.002 53.957L689.002 265.458"
              stroke="#BDBDBD"
              stroke-width="1.29755"
              stroke-dasharray="2.6 2.6"
            />
            <path
              d="M65.7561 280.348V279.601L68.5595 276.532C68.8885 276.173 69.1594 275.861 69.3723 275.595C69.5852 275.327 69.7428 275.075 69.8451 274.84C69.9501 274.603 70.0027 274.354 70.0027 274.094C70.0027 273.795 69.9308 273.537 69.787 273.318C69.646 273.1 69.4525 272.931 69.2064 272.813C68.9604 272.694 68.6839 272.634 68.377 272.634C68.0508 272.634 67.766 272.702 67.5227 272.837C67.2822 272.97 67.0956 273.157 66.9629 273.397C66.833 273.638 66.768 273.92 66.768 274.243H65.7893C65.7893 273.746 65.904 273.309 66.1335 272.933C66.363 272.557 66.6754 272.264 67.0707 272.054C67.4688 271.844 67.9153 271.738 68.4102 271.738C68.9078 271.738 69.3488 271.844 69.7331 272.054C70.1174 272.264 70.4187 272.547 70.6372 272.904C70.8556 273.26 70.9648 273.657 70.9648 274.094C70.9648 274.406 70.9081 274.712 70.7947 275.01C70.6842 275.306 70.4906 275.637 70.2142 276.002C69.9405 276.364 69.5603 276.806 69.0737 277.329L67.1661 279.369V279.435H71.1141V280.348H65.7561ZM75.597 280.464C74.9722 280.464 74.44 280.294 74.0004 279.954C73.5608 279.611 73.2249 279.115 72.9927 278.465C72.7604 277.812 72.6443 277.025 72.6443 276.101C72.6443 275.183 72.7604 274.399 72.9927 273.75C73.2277 273.097 73.5649 272.6 74.0045 272.257C74.4469 271.911 74.9777 271.738 75.597 271.738C76.2163 271.738 76.7457 271.911 77.1853 272.257C77.6276 272.6 77.9649 273.097 78.1972 273.75C78.4322 274.399 78.5497 275.183 78.5497 276.101C78.5497 277.025 78.4335 277.812 78.2013 278.465C77.9691 279.115 77.6332 279.611 77.1936 279.954C76.754 280.294 76.2218 280.464 75.597 280.464ZM75.597 279.551C76.2163 279.551 76.6973 279.253 77.0401 278.656C77.383 278.059 77.5544 277.207 77.5544 276.101C77.5544 275.366 77.4756 274.74 77.318 274.223C77.1632 273.706 76.9392 273.312 76.6462 273.041C76.3559 272.77 76.0062 272.634 75.597 272.634C74.9832 272.634 74.5036 272.937 74.158 273.542C73.8124 274.145 73.6396 274.998 73.6396 276.101C73.6396 276.837 73.717 277.461 73.8718 277.976C74.0266 278.49 74.2492 278.881 74.5395 279.149C74.8325 279.417 75.185 279.551 75.597 279.551ZM80.1255 280.348V279.601L82.9289 276.532C83.2579 276.173 83.5288 275.861 83.7417 275.595C83.9546 275.327 84.1122 275.075 84.2145 274.84C84.3195 274.603 84.3721 274.354 84.3721 274.094C84.3721 273.795 84.3002 273.537 84.1564 273.318C84.0154 273.1 83.8219 272.931 83.5758 272.813C83.3298 272.694 83.0533 272.634 82.7464 272.634C82.4202 272.634 82.1354 272.702 81.8921 272.837C81.6516 272.97 81.465 273.157 81.3323 273.397C81.2024 273.638 81.1374 273.92 81.1374 274.243H80.1587C80.1587 273.746 80.2734 273.309 80.5029 272.933C80.7324 272.557 81.0448 272.264 81.4401 272.054C81.8382 271.844 82.2847 271.738 82.7796 271.738C83.2772 271.738 83.7182 271.844 84.1025 272.054C84.4868 272.264 84.7881 272.547 85.0066 272.904C85.225 273.26 85.3342 273.657 85.3342 274.094C85.3342 274.406 85.2775 274.712 85.1641 275.01C85.0536 275.306 84.86 275.637 84.5836 276.002C84.3099 276.364 83.9297 276.806 83.4431 277.329L81.5355 279.369V279.435H85.4835V280.348H80.1255ZM90.0659 280.464C89.5185 280.464 89.0305 280.37 88.602 280.182C88.1763 279.994 87.8376 279.733 87.586 279.398C87.3372 279.061 87.2017 278.669 87.1796 278.224H88.2246C88.2468 278.498 88.3408 278.734 88.5066 278.934C88.6725 279.13 88.8895 279.282 89.1577 279.39C89.4259 279.498 89.7231 279.551 90.0493 279.551C90.4143 279.551 90.7377 279.488 91.0197 279.361C91.3017 279.233 91.5229 279.057 91.6832 278.83C91.8436 278.603 91.9238 278.341 91.9238 278.042C91.9238 277.73 91.8464 277.454 91.6915 277.217C91.5367 276.976 91.31 276.788 91.0114 276.653C90.7128 276.517 90.3479 276.449 89.9166 276.449H89.2365V275.537H89.9166C90.2539 275.537 90.5497 275.476 90.8041 275.355C91.0612 275.233 91.2616 275.062 91.4054 274.84C91.5519 274.619 91.6252 274.359 91.6252 274.061C91.6252 273.773 91.5616 273.523 91.4344 273.31C91.3073 273.097 91.1275 272.931 90.8953 272.813C90.6658 272.694 90.3949 272.634 90.0825 272.634C89.7894 272.634 89.513 272.688 89.2531 272.796C88.996 272.901 88.7859 273.054 88.6228 273.256C88.4596 273.455 88.3712 273.696 88.3573 273.978H87.3621C87.3786 273.533 87.5127 273.143 87.7643 272.808C88.0159 272.471 88.3449 272.208 88.7513 272.02C89.1605 271.832 89.6097 271.738 90.0991 271.738C90.6244 271.738 91.075 271.845 91.451 272.058C91.827 272.268 92.1159 272.546 92.3177 272.891C92.5196 273.237 92.6205 273.61 92.6205 274.011C92.6205 274.489 92.4947 274.897 92.2431 275.234C91.9943 275.572 91.6556 275.805 91.2271 275.935V276.002C91.7634 276.09 92.1823 276.318 92.4836 276.686C92.785 277.051 92.9356 277.503 92.9356 278.042C92.9356 278.504 92.8099 278.918 92.5583 279.286C92.3094 279.651 91.9694 279.938 91.5381 280.149C91.1068 280.359 90.6161 280.464 90.0659 280.464Z"
              fill="#4F4F4F"
            />
            <path
              d="M51.4333 266.862C50.8085 266.862 50.2763 266.692 49.8367 266.352C49.3971 266.009 49.0612 265.513 48.829 264.863C48.5967 264.211 48.4806 263.423 48.4806 262.5C48.4806 261.582 48.5967 260.798 48.829 260.148C49.064 259.496 49.4012 258.998 49.8408 258.655C50.2832 258.31 50.814 258.137 51.4333 258.137C52.0526 258.137 52.582 258.31 53.0216 258.655C53.4639 258.998 53.8012 259.496 54.0335 260.148C54.2685 260.798 54.386 261.582 54.386 262.5C54.386 263.423 54.2698 264.211 54.0376 264.863C53.8054 265.513 53.4695 266.009 53.0299 266.352C52.5903 266.692 52.0581 266.862 51.4333 266.862ZM51.4333 265.95C52.0526 265.95 52.5336 265.651 52.8764 265.054C53.2193 264.457 53.3907 263.605 53.3907 262.5C53.3907 261.764 53.3119 261.138 53.1543 260.621C52.9995 260.104 52.7755 259.71 52.4825 259.439C52.1922 259.168 51.8425 259.033 51.4333 259.033C50.8195 259.033 50.3399 259.335 49.9943 259.941C49.6487 260.544 49.4759 261.396 49.4759 262.5C49.4759 263.235 49.5533 263.86 49.7081 264.374C49.8629 264.888 50.0855 265.279 50.3758 265.548C50.6688 265.816 51.0213 265.95 51.4333 265.95Z"
              fill="#4F4F4F"
            />
            <path
              d="M39.4543 223.258V222.511L42.2577 219.443C42.5867 219.083 42.8576 218.771 43.0705 218.505C43.2834 218.237 43.441 217.986 43.5433 217.751C43.6483 217.513 43.7008 217.264 43.7008 217.004C43.7008 216.706 43.629 216.447 43.4852 216.229C43.3442 216.01 43.1507 215.842 42.9046 215.723C42.6586 215.604 42.3821 215.544 42.0752 215.544C41.749 215.544 41.4642 215.612 41.2209 215.748C40.9804 215.88 40.7938 216.067 40.6611 216.307C40.5311 216.548 40.4662 216.83 40.4662 217.153H39.4875C39.4875 216.656 39.6022 216.219 39.8317 215.843C40.0611 215.467 40.3736 215.174 40.7689 214.964C41.167 214.754 41.6135 214.649 42.1084 214.649C42.606 214.649 43.047 214.754 43.4313 214.964C43.8156 215.174 44.1169 215.457 44.3353 215.814C44.5537 216.171 44.6629 216.567 44.6629 217.004C44.6629 217.317 44.6063 217.622 44.4929 217.921C44.3823 218.216 44.1888 218.547 43.9123 218.912C43.6386 219.274 43.2585 219.716 42.7719 220.239L40.8643 222.279V222.345H44.8122V223.258H39.4543ZM47.2548 223.324C47.0502 223.324 46.8747 223.251 46.7282 223.104C46.5816 222.958 46.5084 222.782 46.5084 222.578C46.5084 222.373 46.5816 222.198 46.7282 222.051C46.8747 221.905 47.0502 221.831 47.2548 221.831C47.4594 221.831 47.635 221.905 47.7815 222.051C47.928 222.198 48.0013 222.373 48.0013 222.578C48.0013 222.713 47.9667 222.838 47.8976 222.951C47.8313 223.064 47.7414 223.156 47.6281 223.225C47.5175 223.291 47.3931 223.324 47.2548 223.324ZM52.224 223.374C51.7374 223.374 51.2992 223.277 50.9094 223.084C50.5196 222.89 50.2072 222.625 49.9722 222.287C49.7372 221.95 49.6086 221.566 49.5865 221.135H50.5818C50.6205 221.519 50.7946 221.837 51.1043 222.088C51.4167 222.337 51.7899 222.462 52.224 222.462C52.5723 222.462 52.882 222.38 53.1529 222.217C53.4266 222.054 53.6409 221.83 53.7957 221.545C53.9533 221.258 54.0321 220.933 54.0321 220.571C54.0321 220.2 53.9505 219.87 53.7874 219.579C53.6271 219.286 53.4059 219.056 53.1239 218.887C52.8419 218.718 52.5198 218.633 52.1576 218.63C51.8978 218.627 51.631 218.667 51.3573 218.75C51.0836 218.83 50.8582 218.934 50.6813 219.061L49.7192 218.945L50.2334 214.765H54.6458V215.677H51.096L50.7974 218.182H50.8472C51.0214 218.044 51.2398 217.929 51.5024 217.838C51.7651 217.746 52.0388 217.701 52.3235 217.701C52.8433 217.701 53.3064 217.825 53.7128 218.074C54.1219 218.32 54.4426 218.657 54.6749 219.086C54.9099 219.514 55.0274 220.004 55.0274 220.554C55.0274 221.096 54.9057 221.58 54.6624 222.005C54.4219 222.428 54.0901 222.763 53.6671 223.009C53.2442 223.252 52.7631 223.374 52.224 223.374Z"
              fill="#4F4F4F"
            />
            <path
              d="M40.281 138.914L44.0796 131.4V131.333H39.7004V130.421H45.1413V131.383L41.3592 138.914H40.281ZM45.9572 138.98C45.7526 138.98 45.577 138.907 45.4305 138.761C45.284 138.614 45.2107 138.439 45.2107 138.234C45.2107 138.029 45.284 137.854 45.4305 137.707C45.577 137.561 45.7526 137.487 45.9572 137.487C46.1618 137.487 46.3373 137.561 46.4839 137.707C46.6304 137.854 46.7037 138.029 46.7037 138.234C46.7037 138.369 46.6691 138.494 46.6 138.607C46.5336 138.721 46.4438 138.812 46.3304 138.881C46.2198 138.947 46.0954 138.98 45.9572 138.98ZM50.9263 139.03C50.4398 139.03 50.0016 138.933 49.6117 138.74C49.2219 138.546 48.9095 138.281 48.6745 137.944C48.4395 137.606 48.311 137.222 48.2888 136.791H49.2841C49.3228 137.175 49.497 137.493 49.8067 137.745C50.1191 137.993 50.4923 138.118 50.9263 138.118C51.2747 138.118 51.5843 138.036 51.8553 137.873C52.129 137.71 52.3432 137.486 52.4981 137.201C52.6557 136.914 52.7344 136.589 52.7344 136.227C52.7344 135.856 52.6529 135.526 52.4898 135.236C52.3294 134.943 52.1082 134.712 51.8263 134.543C51.5443 134.374 51.2222 134.289 50.86 134.286C50.6001 134.283 50.3333 134.323 50.0596 134.406C49.7859 134.486 49.5606 134.59 49.3837 134.717L48.4216 134.601L48.9358 130.421H53.3482V131.333H49.7984L49.4998 133.838H49.5495C49.7237 133.7 49.9421 133.585 50.2048 133.494C50.4674 133.403 50.7411 133.357 51.0259 133.357C51.5456 133.357 52.0087 133.481 52.4151 133.73C52.8243 133.976 53.145 134.314 53.3772 134.742C53.6122 135.171 53.7297 135.66 53.7297 136.21C53.7297 136.752 53.6081 137.236 53.3648 137.662C53.1243 138.085 52.7925 138.419 52.3695 138.665C51.9465 138.909 51.4655 139.03 50.9263 139.03Z"
              fill="#4F4F4F"
            />
            <path
              d="M45.6357 87.6046V96.0977H44.6073V88.6828H44.5575L42.484 90.0596V89.0146L44.6073 87.6046H45.6357ZM50.8485 96.2138C50.2237 96.2138 49.6915 96.0437 49.2519 95.7037C48.8123 95.3609 48.4764 94.8646 48.2442 94.2149C48.0119 93.5624 47.8958 92.7745 47.8958 91.8511C47.8958 90.9332 48.0119 90.1495 48.2442 89.4998C48.4792 88.8473 48.8165 88.3497 49.2561 88.0068C49.6984 87.6612 50.2292 87.4885 50.8485 87.4885C51.4678 87.4885 51.9972 87.6612 52.4368 88.0068C52.8792 88.3497 53.2165 88.8473 53.4487 89.4998C53.6837 90.1495 53.8012 90.9332 53.8012 91.8511C53.8012 92.7745 53.6851 93.5624 53.4528 94.2149C53.2206 94.8646 52.8847 95.3609 52.4451 95.7037C52.0055 96.0437 51.4733 96.2138 50.8485 96.2138ZM50.8485 95.3014C51.4678 95.3014 51.9488 95.0028 52.2917 94.4057C52.6345 93.8085 52.8059 92.957 52.8059 91.8511C52.8059 91.1157 52.7271 90.4895 52.5695 89.9725C52.4147 89.4555 52.1908 89.0616 51.8977 88.7906C51.6074 88.5197 51.2577 88.3842 50.8485 88.3842C50.2347 88.3842 49.7551 88.6869 49.4095 89.2924C49.0639 89.8951 48.8911 90.748 48.8911 91.8511C48.8911 92.5865 48.9685 93.2113 49.1233 93.7256C49.2782 94.2398 49.5007 94.631 49.791 94.8992C50.0841 95.1673 50.4366 95.3014 50.8485 95.3014Z"
              fill="#4F4F4F"
            />
            <path
              d="M37.0115 44.7843V53.2773H35.9831V45.8625H35.9333L33.8598 47.2393V46.1942L35.9831 44.7843H37.0115ZM39.4541 53.2773V52.5309L42.2575 49.4621C42.5865 49.1027 42.8574 48.7903 43.0703 48.5249C43.2832 48.2567 43.4408 48.0051 43.5431 47.7701C43.6481 47.5323 43.7007 47.2835 43.7007 47.0236C43.7007 46.7251 43.6288 46.4666 43.485 46.2482C43.344 46.0297 43.1505 45.8611 42.9044 45.7422C42.6584 45.6233 42.3819 45.5639 42.075 45.5639C41.7488 45.5639 41.464 45.6316 41.2208 45.7671C40.9802 45.8998 40.7936 46.0864 40.6609 46.3269C40.531 46.5675 40.466 46.8495 40.466 47.1729H39.4873C39.4873 46.6753 39.602 46.2385 39.8315 45.8625C40.061 45.4865 40.3734 45.1934 40.7687 44.9833C41.1668 44.7732 41.6133 44.6681 42.1082 44.6681C42.6059 44.6681 43.0468 44.7732 43.4311 44.9833C43.8154 45.1934 44.1168 45.4768 44.3352 45.8335C44.5536 46.1901 44.6628 46.5868 44.6628 47.0236C44.6628 47.3361 44.6061 47.6416 44.4927 47.9401C44.3822 48.236 44.1886 48.5663 43.9122 48.9313C43.6385 49.2934 43.2583 49.7358 42.7717 50.2583L40.8641 52.2986V52.365H44.8121V53.2773H39.4541ZM47.2547 53.3437C47.0501 53.3437 46.8745 53.2704 46.728 53.1239C46.5815 52.9774 46.5082 52.8018 46.5082 52.5972C46.5082 52.3926 46.5815 52.2171 46.728 52.0706C46.8745 51.924 47.0501 51.8508 47.2547 51.8508C47.4592 51.8508 47.6348 51.924 47.7813 52.0706C47.9279 52.2171 48.0011 52.3926 48.0011 52.5972C48.0011 52.7327 47.9666 52.8571 47.8974 52.9705C47.8311 53.0838 47.7412 53.1751 47.6279 53.2442C47.5173 53.3105 47.3929 53.3437 47.2547 53.3437ZM52.2238 53.3935C51.7372 53.3935 51.299 53.2967 50.9092 53.1032C50.5194 52.9096 50.207 52.6442 49.972 52.3069C49.737 51.9697 49.6084 51.5854 49.5863 51.1541H50.5816C50.6203 51.5384 50.7945 51.8563 51.1041 52.1079C51.4165 52.3567 51.7898 52.4811 52.2238 52.4811C52.5722 52.4811 52.8818 52.3996 53.1527 52.2364C53.4264 52.0733 53.6407 51.8494 53.7955 51.5646C53.9531 51.2771 54.0319 50.9523 54.0319 50.5901C54.0319 50.2196 53.9504 49.8892 53.7872 49.5989C53.6269 49.3059 53.4057 49.075 53.1237 48.9064C52.8417 48.7377 52.5196 48.652 52.1575 48.6493C51.8976 48.6465 51.6308 48.6866 51.3571 48.7695C51.0834 48.8497 50.8581 48.9534 50.6811 49.0806L49.719 48.9645L50.2332 44.7843H54.6457V45.6966H51.0958L50.7972 48.2014H50.847C51.0212 48.0632 51.2396 47.9484 51.5022 47.8572C51.7649 47.766 52.0386 47.7203 52.3233 47.7203C52.8431 47.7203 53.3062 47.8448 53.7126 48.0936C54.1218 48.3396 54.4425 48.6769 54.6747 49.1054C54.9097 49.534 55.0272 50.0233 55.0272 50.5735C55.0272 51.1154 54.9055 51.5992 54.6623 52.0249C54.4217 52.4479 54.09 52.7825 53.667 53.0285C53.244 53.2718 52.7629 53.3935 52.2238 53.3935Z"
              fill="#4F4F4F"
            />
            <path
              d="M50.9248 180.554C50.4382 180.554 50 180.457 49.6102 180.263C49.2204 180.07 48.908 179.804 48.673 179.467C48.438 179.13 48.3094 178.746 48.2873 178.314H49.2826C49.3213 178.699 49.4955 179.016 49.8051 179.268C50.1175 179.517 50.4908 179.641 50.9248 179.641C51.2732 179.641 51.5828 179.56 51.8537 179.397C52.1275 179.233 52.3417 179.01 52.4965 178.725C52.6541 178.437 52.7329 178.112 52.7329 177.75C52.7329 177.38 52.6514 177.049 52.4882 176.759C52.3279 176.466 52.1067 176.235 51.8247 176.067C51.5427 175.898 51.2206 175.812 50.8585 175.809C50.5986 175.807 50.3318 175.847 50.0581 175.93C49.7844 176.01 49.5591 176.114 49.3821 176.241L48.42 176.125L48.9343 171.944H53.3467V172.857H49.7968L49.4982 175.362H49.548C49.7222 175.223 49.9406 175.109 50.2032 175.017C50.4659 174.926 50.7396 174.881 51.0243 174.881C51.5441 174.881 52.0072 175.005 52.4136 175.254C52.8228 175.5 53.1435 175.837 53.3757 176.266C53.6107 176.694 53.7282 177.183 53.7282 177.734C53.7282 178.276 53.6066 178.759 53.3633 179.185C53.1227 179.608 52.791 179.943 52.368 180.189C51.945 180.432 51.4639 180.554 50.9248 180.554Z"
              fill="#4F4F4F"
            />
            <path
              d="M274.662 280.348V279.601L277.466 276.532C277.795 276.173 278.066 275.861 278.279 275.595C278.491 275.327 278.649 275.075 278.751 274.84C278.856 274.603 278.909 274.354 278.909 274.094C278.909 273.795 278.837 273.537 278.693 273.318C278.552 273.1 278.359 272.931 278.113 272.813C277.867 272.694 277.59 272.634 277.283 272.634C276.957 272.634 276.672 272.702 276.429 272.837C276.188 272.97 276.002 273.157 275.869 273.397C275.739 273.638 275.674 273.92 275.674 274.243H274.696C274.696 273.746 274.81 273.309 275.04 272.933C275.269 272.557 275.582 272.264 275.977 272.054C276.375 271.844 276.822 271.738 277.316 271.738C277.814 271.738 278.255 271.844 278.639 272.054C279.024 272.264 279.325 272.547 279.543 272.904C279.762 273.26 279.871 273.657 279.871 274.094C279.871 274.406 279.814 274.712 279.701 275.01C279.59 275.306 279.397 275.637 279.12 276.002C278.847 276.364 278.467 276.806 277.98 277.329L276.072 279.369V279.435H280.02V280.348H274.662ZM284.503 280.464C283.878 280.464 283.346 280.294 282.907 279.954C282.467 279.611 282.131 279.115 281.899 278.465C281.667 277.812 281.551 277.025 281.551 276.101C281.551 275.183 281.667 274.399 281.899 273.75C282.134 273.097 282.471 272.6 282.911 272.257C283.353 271.911 283.884 271.738 284.503 271.738C285.123 271.738 285.652 271.911 286.092 272.257C286.534 272.6 286.871 273.097 287.103 273.75C287.338 274.399 287.456 275.183 287.456 276.101C287.456 277.025 287.34 277.812 287.108 278.465C286.875 279.115 286.539 279.611 286.1 279.954C285.66 280.294 285.128 280.464 284.503 280.464ZM284.503 279.551C285.123 279.551 285.604 279.253 285.946 278.656C286.289 278.059 286.461 277.207 286.461 276.101C286.461 275.366 286.382 274.74 286.224 274.223C286.069 273.706 285.845 273.312 285.552 273.041C285.262 272.77 284.912 272.634 284.503 272.634C283.889 272.634 283.41 272.937 283.064 273.542C282.719 274.145 282.546 274.998 282.546 276.101C282.546 276.837 282.623 277.461 282.778 277.976C282.933 278.49 283.155 278.881 283.446 279.149C283.739 279.417 284.091 279.551 284.503 279.551ZM289.032 280.348V279.601L291.835 276.532C292.164 276.173 292.435 275.861 292.648 275.595C292.861 275.327 293.018 275.075 293.121 274.84C293.226 274.603 293.278 274.354 293.278 274.094C293.278 273.795 293.206 273.537 293.063 273.318C292.922 273.1 292.728 272.931 292.482 272.813C292.236 272.694 291.96 272.634 291.653 272.634C291.326 272.634 291.042 272.702 290.798 272.837C290.558 272.97 290.371 273.157 290.239 273.397C290.109 273.638 290.044 273.92 290.044 274.243H289.065C289.065 273.746 289.18 273.309 289.409 272.933C289.639 272.557 289.951 272.264 290.346 272.054C290.744 271.844 291.191 271.738 291.686 271.738C292.183 271.738 292.624 271.844 293.009 272.054C293.393 272.264 293.694 272.547 293.913 272.904C294.131 273.26 294.24 273.657 294.24 274.094C294.24 274.406 294.184 274.712 294.07 275.01C293.96 275.306 293.766 275.637 293.49 276.002C293.216 276.364 292.836 276.806 292.349 277.329L290.442 279.369V279.435H294.39V280.348H289.032ZM296.102 280.348V279.601L298.906 276.532C299.235 276.173 299.506 275.861 299.719 275.595C299.932 275.327 300.089 275.075 300.191 274.84C300.296 274.603 300.349 274.354 300.349 274.094C300.349 273.795 300.277 273.537 300.133 273.318C299.992 273.1 299.799 272.931 299.553 272.813C299.307 272.694 299.03 272.634 298.723 272.634C298.397 272.634 298.112 272.702 297.869 272.837C297.629 272.97 297.442 273.157 297.309 273.397C297.179 273.638 297.114 273.92 297.114 274.243H296.136C296.136 273.746 296.25 273.309 296.48 272.933C296.709 272.557 297.022 272.264 297.417 272.054C297.815 271.844 298.262 271.738 298.757 271.738C299.254 271.738 299.695 271.844 300.079 272.054C300.464 272.264 300.765 272.547 300.983 272.904C301.202 273.26 301.311 273.657 301.311 274.094C301.311 274.406 301.254 274.712 301.141 275.01C301.03 275.306 300.837 275.637 300.56 276.002C300.287 276.364 299.907 276.806 299.42 277.329L297.512 279.369V279.435H301.46V280.348H296.102Z"
              fill="#4F4F4F"
            />
            <path
              d="M478.379 280.348V279.601L481.183 276.532C481.512 276.173 481.782 275.861 481.995 275.595C482.208 275.327 482.366 275.075 482.468 274.84C482.573 274.603 482.626 274.354 482.626 274.094C482.626 273.795 482.554 273.537 482.41 273.318C482.269 273.1 482.076 272.931 481.829 272.813C481.583 272.694 481.307 272.634 481 272.634C480.674 272.634 480.389 272.702 480.146 272.837C479.905 272.97 479.719 273.157 479.586 273.397C479.456 273.638 479.391 273.92 479.391 274.243H478.412C478.412 273.746 478.527 273.309 478.757 272.933C478.986 272.557 479.298 272.264 479.694 272.054C480.092 271.844 480.538 271.738 481.033 271.738C481.531 271.738 481.972 271.844 482.356 272.054C482.74 272.264 483.042 272.547 483.26 272.904C483.479 273.26 483.588 273.657 483.588 274.094C483.588 274.406 483.531 274.712 483.418 275.01C483.307 275.306 483.114 275.637 482.837 276.002C482.564 276.364 482.183 276.806 481.697 277.329L479.789 279.369V279.435H483.737V280.348H478.379ZM488.22 280.464C487.595 280.464 487.063 280.294 486.623 279.954C486.184 279.611 485.848 279.115 485.616 278.465C485.383 277.812 485.267 277.025 485.267 276.101C485.267 275.183 485.383 274.399 485.616 273.75C485.851 273.097 486.188 272.6 486.628 272.257C487.07 271.911 487.601 271.738 488.22 271.738C488.839 271.738 489.369 271.911 489.808 272.257C490.251 272.6 490.588 273.097 490.82 273.75C491.055 274.399 491.173 275.183 491.173 276.101C491.173 277.025 491.057 277.812 490.824 278.465C490.592 279.115 490.256 279.611 489.817 279.954C489.377 280.294 488.845 280.464 488.22 280.464ZM488.22 279.551C488.839 279.551 489.32 279.253 489.663 278.656C490.006 278.059 490.177 277.207 490.177 276.101C490.177 275.366 490.099 274.74 489.941 274.223C489.786 273.706 489.562 273.312 489.269 273.041C488.979 272.77 488.629 272.634 488.22 272.634C487.606 272.634 487.127 272.937 486.781 273.542C486.435 274.145 486.263 274.998 486.263 276.101C486.263 276.837 486.34 277.461 486.495 277.976C486.65 278.49 486.872 278.881 487.163 279.149C487.456 279.417 487.808 279.551 488.22 279.551ZM492.749 280.348V279.601L495.552 276.532C495.881 276.173 496.152 275.861 496.365 275.595C496.578 275.327 496.735 275.075 496.838 274.84C496.943 274.603 496.995 274.354 496.995 274.094C496.995 273.795 496.923 273.537 496.779 273.318C496.638 273.1 496.445 272.931 496.199 272.813C495.953 272.694 495.676 272.634 495.369 272.634C495.043 272.634 494.758 272.702 494.515 272.837C494.275 272.97 494.088 273.157 493.955 273.397C493.825 273.638 493.76 273.92 493.76 274.243H492.782C492.782 273.746 492.896 273.309 493.126 272.933C493.355 272.557 493.668 272.264 494.063 272.054C494.461 271.844 494.908 271.738 495.403 271.738C495.9 271.738 496.341 271.844 496.726 272.054C497.11 272.264 497.411 272.547 497.63 272.904C497.848 273.26 497.957 273.657 497.957 274.094C497.957 274.406 497.901 274.712 497.787 275.01C497.677 275.306 497.483 275.637 497.207 276.002C496.933 276.364 496.553 276.806 496.066 277.329L494.159 279.369V279.435H498.107V280.348H492.749ZM502.805 271.855V280.348H501.777V272.933H501.727L499.653 274.31V273.265L501.777 271.855H502.805Z"
              fill="#4F4F4F"
            />
            <path
              d="M689.881 280.348V279.601L692.685 276.532C693.013 276.173 693.284 275.861 693.497 275.595C693.71 275.327 693.868 275.075 693.97 274.84C694.075 274.603 694.128 274.354 694.128 274.094C694.128 273.795 694.056 273.537 693.912 273.318C693.771 273.1 693.577 272.931 693.331 272.813C693.085 272.694 692.809 272.634 692.502 272.634C692.176 272.634 691.891 272.702 691.648 272.837C691.407 272.97 691.221 273.157 691.088 273.397C690.958 273.638 690.893 273.92 690.893 274.243H689.914C689.914 273.746 690.029 273.309 690.258 272.933C690.488 272.557 690.8 272.264 691.196 272.054C691.594 271.844 692.04 271.738 692.535 271.738C693.033 271.738 693.474 271.844 693.858 272.054C694.242 272.264 694.544 272.547 694.762 272.904C694.981 273.26 695.09 273.657 695.09 274.094C695.09 274.406 695.033 274.712 694.92 275.01C694.809 275.306 694.616 275.637 694.339 276.002C694.065 276.364 693.685 276.806 693.199 277.329L691.291 279.369V279.435H695.239V280.348H689.881ZM699.722 280.464C699.097 280.464 698.565 280.294 698.125 279.954C697.686 279.611 697.35 279.115 697.118 278.465C696.885 277.812 696.769 277.025 696.769 276.101C696.769 275.183 696.885 274.399 697.118 273.75C697.353 273.097 697.69 272.6 698.13 272.257C698.572 271.911 699.103 271.738 699.722 271.738C700.341 271.738 700.871 271.911 701.31 272.257C701.753 272.6 702.09 273.097 702.322 273.75C702.557 274.399 702.675 275.183 702.675 276.101C702.675 277.025 702.559 277.812 702.326 278.465C702.094 279.115 701.758 279.611 701.319 279.954C700.879 280.294 700.347 280.464 699.722 280.464ZM699.722 279.551C700.341 279.551 700.822 279.253 701.165 278.656C701.508 278.059 701.679 277.207 701.679 276.101C701.679 275.366 701.601 274.74 701.443 274.223C701.288 273.706 701.064 273.312 700.771 273.041C700.481 272.77 700.131 272.634 699.722 272.634C699.108 272.634 698.629 272.937 698.283 273.542C697.937 274.145 697.765 274.998 697.765 276.101C697.765 276.837 697.842 277.461 697.997 277.976C698.152 278.49 698.374 278.881 698.664 279.149C698.958 279.417 699.31 279.551 699.722 279.551ZM704.251 280.348V279.601L707.054 276.532C707.383 276.173 707.654 275.861 707.867 275.595C708.08 275.327 708.237 275.075 708.339 274.84C708.445 274.603 708.497 274.354 708.497 274.094C708.497 273.795 708.425 273.537 708.281 273.318C708.14 273.1 707.947 272.931 707.701 272.813C707.455 272.694 707.178 272.634 706.871 272.634C706.545 272.634 706.26 272.702 706.017 272.837C705.777 272.97 705.59 273.157 705.457 273.397C705.327 273.638 705.262 273.92 705.262 274.243H704.284C704.284 273.746 704.398 273.309 704.628 272.933C704.857 272.557 705.17 272.264 705.565 272.054C705.963 271.844 706.41 271.738 706.905 271.738C707.402 271.738 707.843 271.844 708.228 272.054C708.612 272.264 708.913 272.547 709.132 272.904C709.35 273.26 709.459 273.657 709.459 274.094C709.459 274.406 709.402 274.712 709.289 275.01C709.179 275.306 708.985 275.637 708.709 276.002C708.435 276.364 708.055 276.806 707.568 277.329L705.661 279.369V279.435H709.608V280.348H704.251ZM714.091 280.464C713.467 280.464 712.934 280.294 712.495 279.954C712.055 279.611 711.719 279.115 711.487 278.465C711.255 277.812 711.139 277.025 711.139 276.101C711.139 275.183 711.255 274.399 711.487 273.75C711.722 273.097 712.059 272.6 712.499 272.257C712.941 271.911 713.472 271.738 714.091 271.738C714.711 271.738 715.24 271.911 715.68 272.257C716.122 272.6 716.459 273.097 716.692 273.75C716.927 274.399 717.044 275.183 717.044 276.101C717.044 277.025 716.928 277.812 716.696 278.465C716.463 279.115 716.128 279.611 715.688 279.954C715.248 280.294 714.716 280.464 714.091 280.464ZM714.091 279.551C714.711 279.551 715.192 279.253 715.535 278.656C715.877 278.059 716.049 277.207 716.049 276.101C716.049 275.366 715.97 274.74 715.812 274.223C715.658 273.706 715.434 273.312 715.141 273.041C714.85 272.77 714.501 272.634 714.091 272.634C713.478 272.634 712.998 272.937 712.652 273.542C712.307 274.145 712.134 274.998 712.134 276.101C712.134 276.837 712.211 277.461 712.366 277.976C712.521 278.49 712.744 278.881 713.034 279.149C713.327 279.417 713.679 279.551 714.091 279.551Z"
              fill="#4F4F4F"
            />
            <path
              d="M897.489 280.348V279.601L900.292 276.532C900.621 276.173 900.892 275.861 901.105 275.595C901.318 275.327 901.475 275.075 901.577 274.84C901.683 274.603 901.735 274.354 901.735 274.094C901.735 273.795 901.663 273.537 901.519 273.318C901.378 273.1 901.185 272.931 900.939 272.813C900.693 272.694 900.416 272.634 900.109 272.634C899.783 272.634 899.498 272.702 899.255 272.837C899.015 272.97 898.828 273.157 898.695 273.397C898.565 273.638 898.5 273.92 898.5 274.243H897.522C897.522 273.746 897.636 273.309 897.866 272.933C898.095 272.557 898.408 272.264 898.803 272.054C899.201 271.844 899.648 271.738 900.143 271.738C900.64 271.738 901.081 271.844 901.466 272.054C901.85 272.264 902.151 272.547 902.37 272.904C902.588 273.26 902.697 273.657 902.697 274.094C902.697 274.406 902.641 274.712 902.527 275.01C902.417 275.306 902.223 275.637 901.947 276.002C901.673 276.364 901.293 276.806 900.806 277.329L898.899 279.369V279.435H902.846V280.348H897.489ZM907.329 280.464C906.705 280.464 906.172 280.294 905.733 279.954C905.293 279.611 904.957 279.115 904.725 278.465C904.493 277.812 904.377 277.025 904.377 276.101C904.377 275.183 904.493 274.399 904.725 273.75C904.96 273.097 905.297 272.6 905.737 272.257C906.179 271.911 906.71 271.738 907.329 271.738C907.949 271.738 908.478 271.911 908.918 272.257C909.36 272.6 909.697 273.097 909.93 273.75C910.165 274.399 910.282 275.183 910.282 276.101C910.282 277.025 910.166 277.812 909.934 278.465C909.701 279.115 909.366 279.611 908.926 279.954C908.486 280.294 907.954 280.464 907.329 280.464ZM907.329 279.551C907.949 279.551 908.43 279.253 908.773 278.656C909.115 278.059 909.287 277.207 909.287 276.101C909.287 275.366 909.208 274.74 909.05 274.223C908.896 273.706 908.672 273.312 908.379 273.041C908.088 272.77 907.739 272.634 907.329 272.634C906.716 272.634 906.236 272.937 905.89 273.542C905.545 274.145 905.372 274.998 905.372 276.101C905.372 276.837 905.449 277.461 905.604 277.976C905.759 278.49 905.982 278.881 906.272 279.149C906.565 279.417 906.917 279.551 907.329 279.551ZM914.844 271.855V280.348H913.815V272.933H913.766L911.692 274.31V273.265L913.815 271.855H914.844ZM919.99 271.738C920.339 271.741 920.687 271.808 921.035 271.938C921.384 272.067 921.702 272.283 921.989 272.584C922.277 272.883 922.507 273.291 922.682 273.808C922.856 274.325 922.943 274.973 922.943 275.753C922.943 276.508 922.871 277.178 922.727 277.764C922.586 278.347 922.382 278.84 922.114 279.24C921.848 279.641 921.525 279.945 921.143 280.153C920.764 280.36 920.336 280.464 919.858 280.464C919.382 280.464 918.958 280.37 918.584 280.182C918.214 279.991 917.91 279.727 917.672 279.39C917.437 279.05 917.286 278.656 917.22 278.208H918.232C918.323 278.598 918.504 278.92 918.775 279.174C919.049 279.426 919.41 279.551 919.858 279.551C920.513 279.551 921.03 279.265 921.409 278.693C921.79 278.121 921.981 277.312 921.981 276.267H921.914C921.76 276.499 921.576 276.7 921.363 276.868C921.15 277.037 920.914 277.167 920.654 277.258C920.394 277.349 920.117 277.395 919.824 277.395C919.338 277.395 918.891 277.275 918.485 277.034C918.081 276.791 917.758 276.458 917.514 276.035C917.274 275.609 917.154 275.122 917.154 274.575C917.154 274.055 917.27 273.58 917.502 273.148C917.737 272.714 918.066 272.369 918.489 272.112C918.915 271.855 919.415 271.73 919.99 271.738ZM919.99 272.651C919.642 272.651 919.328 272.738 919.049 272.912C918.772 273.083 918.553 273.316 918.389 273.609C918.229 273.899 918.149 274.221 918.149 274.575C918.149 274.929 918.226 275.251 918.381 275.541C918.539 275.829 918.753 276.058 919.024 276.23C919.298 276.398 919.609 276.483 919.957 276.483C920.22 276.483 920.464 276.431 920.691 276.329C920.918 276.224 921.115 276.082 921.284 275.902C921.456 275.72 921.59 275.514 921.686 275.284C921.783 275.052 921.832 274.81 921.832 274.558C921.832 274.227 921.751 273.916 921.591 273.625C921.433 273.335 921.215 273.1 920.936 272.92C920.659 272.741 920.344 272.651 919.99 272.651Z"
              fill="#4F4F4F"
            />
            <path
              d="M64.877 63.0391C175.964 94.4535 418.363 155.34 499.258 147.573C600.376 137.863 694.373 120.156 765.583 142.432C822.551 160.253 876.671 176.512 896.609 182.414"
              stroke="#5B41F9"
              stroke-width="3.89266"
            />
            <ellipse
              cx="65.1521"
              cy="63.2664"
              rx="4.57203"
              ry="4.58284"
              fill="#F94144"
            />
            <ellipse
              cx="273.166"
              cy="114.821"
              rx="4.57203"
              ry="4.58284"
              fill="#F94144"
            />
            <ellipse
              cx="478.179"
              cy="148.048"
              rx="4.57203"
              ry="4.58284"
              fill="#F94144"
            />
            <ellipse
              cx="688.383"
              cy="132.009"
              rx="4.57203"
              ry="4.58284"
              fill="#F94144"
            />
            <ellipse
              cx="895.992"
              cy="182.419"
              rx="4.57203"
              ry="4.58284"
              fill="#F94144"
            />
            <path d="M0 2.05469H955" stroke="#F0F0F0" stroke-width="2.59511" />
            <path
              d="M66.1758 236.957C124.477 247.301 259.849 264.197 334.93 249.025C428.78 230.06 548.226 189.257 589.463 174.315C630.701 159.373 677.626 138.683 755.835 165.694C834.044 192.705 869.593 219.141 896.611 221.44"
              stroke="#2CE7F3"
              stroke-width="3.89266"
            />
            <ellipse
              cx="65.5564"
              cy="236.895"
              rx="4.57203"
              ry="4.58284"
              fill="#F3722C"
            />
            <ellipse
              cx="273.166"
              cy="255.227"
              rx="4.57203"
              ry="4.58284"
              fill="#F3722C"
            />
            <ellipse
              cx="478.179"
              cy="211.688"
              rx="4.57203"
              ry="4.58284"
              fill="#F3722C"
            />
            <ellipse
              cx="688.383"
              cy="153.259"
              rx="4.57203"
              ry="4.58284"
              fill="#F3722C"
            />
            <ellipse
              cx="895.992"
              cy="220.856"
              rx="4.57203"
              ry="4.58284"
              fill="#F3722C"
            />
          </svg>
        </div>
      </div>

      <div className=" overflow-x-auto ">
        <table className="w-full min-w-[50rem] ">
          <thead>
            <tr className=" text-sm font-bold ">
              <th className=" p-0 ">
                <div className=" border-y bg-black px-2 py-4 text-left text-white dark:bg-white/20">
                  Declaration Date
                </div>
              </th>

              <th className=" p-0 ">
                <div className=" border-y bg-black px-2 py-4 text-right text-white dark:bg-white/20">
                  Payment Date
                </div>
              </th>

              <th className=" p-0 ">
                <div className=" border-y bg-black px-2 py-4 text-right text-white dark:bg-white/20">
                  Record Date
                </div>
              </th>

              <th className=" p-0 ">
                <div className=" border-y bg-black px-2 py-4 text-right text-white dark:bg-white/20">
                  Amount
                </div>
              </th>

              <th className=" p-0 ">
                <div className=" border-y bg-black px-2 py-4 text-right text-white dark:bg-white/20">
                  Currency
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {Array(10)
              .fill("")
              .map((_, index) => {
                return (
                  <tr key={`dividends-${index}`} className=" text-sm ">
                    <td className=" border-y px-2 py-4 text-left ">02-03-23</td>

                    <td className={` border-y px-2 py-4 text-right`}>02-03-23</td>

                    <td className=" border-y px-2 py-4 text-right ">02-03-23</td>

                    <td className=" border-y px-2 py-4 text-right">0.24</td>

                    <td className=" border-y px-2 py-4 text-right">USD</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
