const { defineConfig } = require("@vue/cli-service");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
module.exports = defineConfig({
  devServer: {
    proxy: "https://plbattle-local.herokuapp.com/",
    clientLogLevel: "info",
    historyApiFallback: true,
  },
  transpileDependencies: ["vuetify"],
  entry: "index.js",
  /* ... */
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: "Source Sans Pro" },
          { family: "Roboto", variants: ["400", "700italic"] },
          { family: "Chakra Petch" },
          /*ここにフォントを追加していく．もちろん上のRobotoとSourse sans proは消してよい*/
        ],
        /* ...options */
      }),
    ],
  },
});

module.exports = {};
