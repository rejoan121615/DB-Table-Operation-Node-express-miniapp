const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();

// update data
router.get("/", (req, res, next) => {
    res.redirect('/edit/dc');
});

router.get('/details', (req, res, next) => {
    res.render("Edit", { type: "details" });
})
router.get('/shared', (req, res, next) => {
    res.render("Edit", { type: "shared" });
})
router.get('/dc', (req, res, next) => {
    res.render('Edit', {type: 'dc'})
})



module.exports = router;
