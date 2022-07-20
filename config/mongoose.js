const config = require("./config");
const mongoose = require("mongoose");
module.exports = () => {
  // mongoose.set("useNewUrlParser", true);
  mongoose.set("debug", config.isDev ? true : false);
  // mongoose.set("useFindAndModify", true);
  // mongoose.set("useCreateIndex", true);
  // mongoose.set("buffercommands", config.isDev ? false : true);
  require("../models/user");
  return mongoose.connect(config.db, { autoIndex: true });
};
