/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@relume_io/relume-ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
