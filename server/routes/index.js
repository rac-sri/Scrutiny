var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const channel = require("../models/channel");
const subChannel = require("../models/subChannel");
const threads = require("../models/threads");
const User = require("../models/user");
const flash = require("express-flash");
const session = require("express-session");
var passport = require("passport");
var initializePassport = require("./passport-config");

initializePassport(
  passport,
  async (username) => await User.findOne({ email: username }),
  async (id) => await User.findById(id)
);

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log("errr", e));

router.use(flash());
router.use(
  session({
    secret: "scruitiny",
  })
);
router.use(passport.initialize());
router.use(passport.session());

// const restrict = function (req, res, next) {
//   if (!req.session.userid) {
//     req.session.redirectTo = "/success";
//     res.redirect("/success");
//   } else {
//     next();
//   }
// };

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/login",
  })
);

router.get("/success", (req, res) => {
  res.send("channel");
});
router.post("/register", checkNotAuthenticated, async (req, res) => {
  await User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });
  res.send("success");
});

router.get("/", function (req, res, next) {
  res.send("nice");
});

router.get("/channels", async (req, res) => {
  const result = await channel.find({});
  res.send(result);
  res.end();
});

router.post("/channels", async (req, res) => {
  const create = await channel.create({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
  });
  res.send(create);
  res.end();
});

router.get("/subChannel/:id", async (req, res) => {
  const result = await subChannel.find({ channel: req.params.id });
  res.send(result);
  res.end();
});
router.post("/subChannel/:id", async (req, res) => {
  const create = await subChannel.create({
    channel: mongoose.Types.ObjectId(req.params.id),
    heading: req.body.heading,
  });
  res.send(create);
  res.end();
});

router.post("/threads/:id", async (req, res) => {
  const create = await threads.create({
    heading: req.body.heading,
    message: req.body.message,
    subChannel: mongoose.Types.ObjectId(req.params.id),
  });
  res.send(create);
  res.end();
});

router.get("/threads/:id", async (req, res) => {
  const result = await threads.find({ subChannel: req.params.id });
  res.send(result);
  res.end();
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/success");
  }
  next();
}

module.exports = router;
