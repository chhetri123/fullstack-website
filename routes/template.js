const express = require("express");
const header = require("../views/UI template/header");
const contact = require("../views/UI template/contact");
const nodemailer = require("nodemailer");
const about = require("../views/UI template/about");
const router = express.Router();
function isCookies(req, res, next) {
  return req.session.userID ? next() : res.redirect("/signup");
}

router.get("/", (req, res) => {
  res.send(header({ req: req.session.userID }));
});

router.get("/home", (req, res) => {
  res.send(header({ req: req.session.userID }));
});

router.get("/about", isCookies, (req, res) => {
  res.send(about({ req: req.session.userID }));
});
router.get("/contact", isCookies, (req, res) => {
  res.send(contact({ req: req.session.userID }));
});
router.get("/portfolio", (req, res) => {
  res.send(header({ req: req.session.userID }));
});
router.post("/contact", isCookies, (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mlive6207@gmail.com",
      pass: "qwerty123@#",
    },
  });

  const mailOptions = {
    from: req.body.Email,
    to: "mlive6207@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: `
    Name: ${req.body.name},
    Email: ${req.body.Email}
    Phone number: ${req.body.phoneNumber},
    How did you find me?
    ---> ${req.body.howGotMe} ,
    Any Messages?
    ----> ${req.body.message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(contact({ req: req.session.userID, msg: "Not sent " }));
    } else {
      console.log("Email sent" + { info });
      res.send(contact({ req: req.session.userID, msg: "Sent Successfully" }));
    }
  });
});
module.exports = router;
