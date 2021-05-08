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
    test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
    use: [
      {
        loader: "url-loader", // this needs file-loader
        options: {
          limit: 50000
        }
      }
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
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "/src/index.tsx",
  output: { path: path.resolve(__dirname, "build"), filename: "bundle.js" },
  module: { rules },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", "css", ".scss"]
  },
  devServer: {
    contentBase: "./",
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: `${path.join('static', 'css')}/[name].css`
    })
  ]
};
