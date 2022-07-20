const cors = require("cors");
const formData = require("express-form-data");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session"); // session middleware
const passport = require("passport"); // authentication
const os = require("os");
const fileUpload = require("express-fileupload");
module.exports = () => {
  const options = {
    uploadDir: os.tmpdir(),
    autoClean: true,
  };
  const app = express();
  app.use(fileUpload());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 500,
    })
  );
  app.use(passport.initialize());
  require("../middleware/passport")(passport);
  // app.use(passport.session());
  // app.use(
  //   session({
  //     secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  //   })
  // );
  // app.use(formData.parse(options));
  // // delete from the request all empty files (size == 0)
  // app.use(formData.format());
  // // change the file objects to fs.ReadStream
  // app.use(formData.stream());
  // // union the body and the files
  // app.use(formData.union());
  require("../routes")(app);
  return app;
};
