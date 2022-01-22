const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WarningsToErrorsPlugin = require("warnings-to-errors-webpack-plugin");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    main: paths.src + "/index.js",
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  optimization: {
    emitOnErrors: false,
  },

  resolve: {
    alias: {
      "@": "..src/",
    },
    modules: [__dirname, "src", "node_modules"],
    extensions: [".jsx", ".js", ".json", ".scss"],
    fallback: {
      http: false,
      https: false,
      stream: false,
      zlib: false,
    },
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      //   favicon: paths.src + "/assets/img/brand/favicon.png",
      //   title:"My App",
      template: paths.src + "/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    // Treats warnings as errors
    new WarningsToErrorsPlugin(),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workerParallelJobs: 2,
              workerNodeArgs: ["--max-old-space-size=1024"],
              poolRespawn: false,
              poolTimeout: 2000,
              poolParallelJobs: 50,
            },
          },
          {
            loader: "babel-loader",
          },
        ],
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },

      // Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      // SVG
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
};
