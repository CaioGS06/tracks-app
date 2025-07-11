const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).send({ error: "Please provide e-mail and password." });

  const userExists = await User.findOne({ email });

  if (userExists)
    return res.status(409).send({ error: "This user already exists. Have you tried signing in?" });

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Something went wrong signing up." });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).send({ error: "Please provide e-mail and password." });

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).send({ error: "This user does not exist." });

  try {
    await user.comparePassword(password);

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "We couldn't verify your credentials." });
  }

});

module.exports = router;