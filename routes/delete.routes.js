const { Router } = require("express");
const {
    deleteGet,
    deletePost,
    singleRecordDeleteGet,
} = require("../controllers/deleteController");
const router = Router();

// search data
router.get("/", (req, res, next) => {
    res.redirect("/delete/details");
});

router.get("/:url", deleteGet);

router.post("/:url", deletePost);

router.get("/:url/:postId", singleRecordDeleteGet);

module.exports = router;
