const express = require("express");
const router = express.Router();
const { authJWT } = require("../middleware/authentication");
const {
  signIn,
  loginUserAuthPassportLocal,
  userLogout,
  confirmRegistration,
  resetPassword,
  resetPasswordEmail,
} = require("../controllers/User.controller");

router.post("/signIn", signIn);
router.post("/login", loginUserAuthPassportLocal);
router.get("/logout", userLogout);
router.get("/userProfile", authJWT);
router.get("/confirm/:confirmationCode", confirmRegistration);
router.put("/userProfile/passReset", resetPassword);
router.get("/userProfile/resetPassword", resetPasswordEmail);

module.exports = router;
