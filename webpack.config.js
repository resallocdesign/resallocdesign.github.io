const path = require("path");
module.exports = {
  devServer: {
    watchOptions: {
      ignored: [
        path.resolve(__dirname, "build"),
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "public"),
      ],
    },
  },
};
