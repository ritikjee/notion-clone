/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "qzeetauprtzrivqlbyqq.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
