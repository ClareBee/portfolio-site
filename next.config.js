const withPlugins = require('next-compose-plugins');
// security alert https://www.npmjs.com/advisories/1217
// const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

const sass = require('@zeit/next-sass');

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// module.exports = withPlugins(
//   [[sass], [optimizedImages], [bundleAnalyzer]],
//   nextConfig,
// );
module.exports = withPlugins([[sass], [bundleAnalyzer]], nextConfig);
