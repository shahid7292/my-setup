const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { DefinePlugin } = require("webpack");
const FontPreloadPlugin = require("webpack-font-preload-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const zlib = require("zlib");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
      chunkFilename: "[id].css",
    }),
    new FontPreloadPlugin({
      indexFile: "index.html",
      extensions: ["woff", "woff2", "ttf", "eot"],
      crossorigin: true,
      loadType: "preload",
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg|png|jpg|jpeg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    }),
    new DefinePlugin({
      "process.env.MODE": JSON.stringify("production"),
      "process.env.VERSION": JSON.stringify(process.env.npm_package_version),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    moduleIds: "named",
    chunkIds: "named",
    minimizer: ["...", new HtmlMinimizerPlugin()],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          idHint: "vendors",
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
