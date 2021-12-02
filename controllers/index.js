const router = require("express").Router();

const homeRoutes = require("./view/home");

router.use("/", homeRoutes);

module.exports = router;