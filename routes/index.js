const userRouter = require("./user");

module.exports = function (app) {
  app.use("/auth", userRouter);
};
