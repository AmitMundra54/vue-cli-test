module.exports = {
  outputDir: "assets",

  /** @param {import('webpack-chain')} config */
  chainWebpack(config) {
    console.log("config", config);
    if (process.env.NODE_ENV === "development") {
      config.output.chunkFilename("main.js").filename("main.js");
    } else if (process.env.NODE_ENV === "production") {
      config.output.chunkFilename("main.js").filename("main.js");
    }
    const scssRule = config.module.rule("scss");
  },

  devServer: {
    writeToDisk: true
  }
};
