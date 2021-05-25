const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      src: path.resolve(__dirname, "src"),
    },
  };

  config.externals = {
    react: "React",
    "react-dom": "ReactDOM",
    quill: "Quill",
  };

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: "public/index.html",
      cdn: {
        css: [],
        js: [
          "https://unpkg.com/react@17/umd/react.production.min.js",
          "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
          "https://cdn.quilljs.com/1.3.6/quill.js",
        ],
      },
    })
  );
  return config;
};
