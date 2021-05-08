const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.tsx?/,
    exclude: [/(node_modules|dist)/],
    loader: "babel-loader"
  },
  {
    test: /\.module\.s(a|c)ss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: [/\.module.(s(a|c)ss)$/],
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader?url=false",
      "resolve-url-loader",
      "sass-loader"
    ]
  },
  {
    test: /\.(png|jpeg|jpg|eot|woff|woff2|ttf)$/,
    use: [
      {
        options: {
          name: "[name].[ext]",
          outputPath: "/public/media/"
        },
        loader: "file-loader"
      }
    ]
  },
  {
    test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
    use: [
      {
        loader: "url-loader", // this need file-loader
        options: {
          limit: 50000
        }
      }
    ]
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  module: { rules },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", "css", ".scss"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: `path.join('static', 'css')/[name].css`
    })
  ]
};
