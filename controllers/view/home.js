const router = require("express").Router();

router.get("/", (req,res) => {
    res.render("Home");
})

module.exports = router;