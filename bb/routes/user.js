const router = require("express").Router();
const userCtr = require("../controllers/user");
const auth = require("../middleware/auth");
router.post("/register", userCtr.register);
router.post("/login", userCtr.login);
router.get("/loginwithtoken", auth.required, userCtr.loginwithtoken);

module.exports = router;
