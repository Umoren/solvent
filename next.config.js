/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //swcMinify: true,
  images: {
    loader: "default",
    domains: ["solvent-blog.herokuapp.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
