const express = require("express");

const router = express.Router();

const {
  userRegister,
  userLogin,
  userLogout,
  checkAuth,
} = require("../controllers/auth.controller");

const {
  userRegisterValidator,
  userLoginValidator,
} = require("../middlewares/input-validation");

const { isLogin} = require("../middlewares/auth.middleware");



router.post("/register", userRegisterValidator, userRegister);

router.post("/login", userLoginValidator, userLogin);

router.post("/logout", isLogin, userLogout);

router.get("/check-auth", isLogin,checkAuth);




module.exports = router;
