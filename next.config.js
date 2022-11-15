const CopyPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    const newConfig = {
      ...config,
      plugins: [
        ...(config.plugins ?? []),
        // 1. Make the wasm file available to the build system
        new CopyPlugin({
          patterns: [
            {
              from: "node_modules/canvaskit-wasm/bin/full/canvaskit.wasm",
            },
          ],
        }),
        // 2. Polyfill fs and path module from node
        new NodePolyfillPlugin(),
        new options.webpack.DefinePlugin({
          'react-native$': 'react-native-web'
        })
      ],
      resolve: {
        ...config.resolve,
        // FIXME: To fix missing modules in browser when using webassembly
        fallback: {
          fs: false,
          path: false,
        },
        extensions: [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          '.js',
          '.ts',
          '.tsx',
          '...',
        ],
      },
      externals: [
        ...config.externals,
        {
          // 3. Avoid warning if reanimated is not present
          "react-native-reanimated": "require('react-native-reanimated')",
          "react-native-reanimated/lib/reanimated2/core": "require('react-native-reanimated/lib/reanimated2/core')",
        }
      ],
    };

    newConfig.resolve.alias['react-native'] = 'react-native-web';

    return newConfig;
  },
}

module.exports = nextConfig
