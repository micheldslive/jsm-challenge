/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@jsm/ui"],
  env: {
    JSM_API_BASE_PATH: process.env.JSM_API_BASE_PATH,
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "randomuser.me",
      },
    ],
  },
}
