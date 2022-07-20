const http = require("http");
// const { default: mongoose } = require("mongoose");
const express = require("./config/express");
const mongoose = require("./config/mongoose");
const port = 8000;
mongoose()
  .then(() => {
    const app = express();
    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server is running at port${port}`);
      console.log(`http://127.0.0.1:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
