const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  },
  {
    test: /\.(png|jpeg|jpg|eot|woff|woff2|ttf)$/,
    use: [
      {
        options: {
          name: "[name].[ext]",
          outputPath: "media/"
        },
        loader: "file-loader"
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
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx", "css", ".scss"] },
  devServer: {
    contentBase: "./",
    port: 5000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `path.join('static', 'css')/[name].css`
    })
  ]
};
