const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const templateRouter = require("./routes/template");
const socialMediaRouter = require("./routes/socialMedia");
const cookies = require("cookie-session");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies({ keys: ["manish"] }));
app.use(authRouter);
app.use(templateRouter);
app.use(function (req, res, next) {
  req.session.userID ? next() : next(res.redirect("/signup"));
}, socialMediaRouter);

app.listen(port, () => {
  console.log("listining***" + port);
});
