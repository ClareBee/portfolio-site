const withPlugins = require('next-compose-plugins');

const nextConfig = {
  distDir: 'build',
  webpack: (config, options) => {
    config.module.rules.push({
         test: /\.md$/,
         use: 'raw-loader'
       })
    return config;
  }
};

const sass = require('@zeit/next-sass');

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withTM = require('next-transpile-modules');

// module.exports = withTM({
//   transpileModules: ['somemodule', 'and-another']
// });

module.exports = withPlugins([[sass], [bundleAnalyzer]], nextConfig);
