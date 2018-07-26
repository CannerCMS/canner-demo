const withCss = require("@zeit/next-css");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".css"] = () => {};
}

module.exports = withCss({
  distDir: isProd ? "next" : ".next",
  webpack(config) {
    // Further custom configuration here
    return config;
  }
});
