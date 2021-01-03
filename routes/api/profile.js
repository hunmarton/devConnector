const express = require("express");
const router = express.Router();

//@route get api/users
//@desc Test route
//@access Public
router.get("/", (req, res) => {
  res.send("Proflie route");
});

module.exports = router;
