const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config({
  path: __dirname + "/./../.env",
});

const { SERVER_PORT, PROTOCOL, PORT, HOST } = process.env;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: `${PROTOCOL}://${HOST}:${SERVER_PORT}`,
      changeOrigin: true,
    })
  );
};
