const paths = require("./paths");

const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    static: {
      directory: paths.build,
    },
    open: false,
    compress: false,
    hot: true,
    client: {
      overlay: true,
    },
    host: "localhost",
    port: 9000,
    // proxy: {
    //   // proxy URLs to backend development server
    //   "/backend": {
    //     target: "http://localhost:8000",
    //     pathRewrite: { "^/backend": "" },
    //   },
    // },
  },
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          {
            loader: "sass-loader",
            options: { sourceMap: true, implementation: require("sass") },
          },
        ],
      },
    ],
  },

  plugins: [
    new DefinePlugin({
      "process.env.MODE": JSON.stringify("test"),
      "process.env.VERSION": JSON.stringify(process.env.npm_package_version),
    }),
  ],
});
