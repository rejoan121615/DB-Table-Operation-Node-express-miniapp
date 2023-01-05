const { Router } = require("express");
const router = Router();
const { insertGet, insertPost } = require('../controllers/InsertController')

// redirect root url
router.get("/", (req, res, next) => {
    res.redirect("/insert/details");
});

router.get("/:url", insertGet );

router.post("/:url", insertPost);

module.exports = router;
