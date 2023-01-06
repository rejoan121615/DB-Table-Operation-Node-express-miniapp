const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();
const { updateGet, updatePost } = require("../controllers/updateController");

// update data
router.get("/", (req, res, next) => {
    res.redirect("/edit/details");
});

router.get("/:url", updateGet);
// router.get('/shared', (req, res, next) => {
//     res.render("Edit", { type: "shared" });
// })
// router.get('/dc', (req, res, next) => {
//     res.render('Edit', {type: 'dc'})
// })

router.post('/:url', updatePost);


module.exports = router;
