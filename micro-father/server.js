// server.js
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const devProxy = {
  "/son1": {
    target: "http://localhost:1234", // 端口自己配置合适的
    pathRewrite: {
      "^/son1": "/",
    },
    changeOrigin: true,
  },
  "/son2": {
    target: "http://localhost:1235", // 端口自己配置合适的
    pathRewrite: {
      "^/son2": "/",
    },
    changeOrigin: true,
  },
};

const port = parseInt(process.env.PORT, 10) || 1233;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]));
      });
    }

    server.all("*", (req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
