module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/main.scss";',
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-ec" : "/",
};
