/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 'utfs.io',
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
