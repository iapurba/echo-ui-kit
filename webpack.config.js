const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
    library: {
      name: "EchoUIKit",
      type: "umd",
    },
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ⬅️ this makes @/ work
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    byDependency: {
      esm: {
        fullySpecified: false,
      },
    },
  },
};
