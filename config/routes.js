var express = require('express');
var router = express.Router();

router.use("/", require("../controller/home"));
router.use("/about", require("../controller/about"));
// router.use("/user", require("../controller/user"));

// router.use("*", require("../controller/404"));

module.exports=router;