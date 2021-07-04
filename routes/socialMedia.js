const express = require("express");
const router = express.Router();

router.get("/facebook", (req, res) => {
  res.redirect("www.facebook.com/chhetridon13");
});
router.get("/github", (req, res) => {
  res.redirect("www.github.com/chhetri123");
});
router.get("/linkedin", (req, res) => {
  res.redirect("https://www.linkedin.com/in/chhetri-don-5bb9391aa/");
});
router.get("/twitter", (req, res) => {
  res.redirect("https://twitter.com/Chhetri18951764");
});
router.get("/insta", (req, res) => {
  res.redirect("https://www.instagram.com/chhetri_monu_1/");
});

module.exports = router;
