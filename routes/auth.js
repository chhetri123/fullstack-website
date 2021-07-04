const express = require("express");
const userRepo = require("../repo/user");
const { validationResult } = require("express-validator");
const signinTemplate = require("../views/admin/signin");
const signupTemplate = require("../views/admin/signup");
const router = express.Router();
const {
  requireEmail,
  requirePassword,
  requireConformPassword,
  checkPassword,
  checkEmail,
} = require("./validator");

router.get("/signout", (req, res) => {
  req.session.userID = null;
  res.redirect("/");
});

router.get("/signup", (req, res) => {
  res.send(signupTemplate({}));
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requireConformPassword],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ errors }));
    }
    const user = await userRepo.createAccount({ email, password });
    req.session.userID = user.id;

    res.redirect("/home");
  }
);

router.post("/signin", [checkEmail, checkPassword], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(signinTemplate({ errors }));
  }
  const user = await userRepo.getByOne({ email: req.body.email });
  req.session.userID = user.id;
  res.redirect("/home");
});
module.exports = router;
