/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "43.231.113.143",
        port: "3003",
      },
      {
        protocol: "http",
        hostname: "ithorse.mn",
      },
    ],
  },
};

export default nextConfig;
