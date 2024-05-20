/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/*/**",
      },
    //   {
    //     protocol: "https",
    //     hostname: "cdn.i-scmp.com",
    //     port: "",
    //     pathname: "/*/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "www.aljazeera.com",
    //     port: "",
    //     pathname: "/*/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "e3.365dm.com",
    //     port: "",
    //     pathname: "/*/**",
    //   },
    ],
  },
};

export default nextConfig;
