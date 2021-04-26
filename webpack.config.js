const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

const rules = [
  {
    test: /\.tsx?/,
    exclude: [/(node_modules|dist)/],
    loader: "babel-loader"
  },
  {
    test: /\.module\.s(a|c)ss$/,
    loader: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: isDevelopment
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: isDevelopment
        }
      }
    ]
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: [/\.module.(s(a|c)ss)$/],
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  },
  {
    test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          outputPath: path.join("static", "media")
        }
      }
    ]
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"] },
  devServer: {
    contentBase: "./",
    port: 5000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    })
  ]
};
