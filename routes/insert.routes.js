const { Router } = require("express");
// const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// insert data
router.get("/", (req, res, next) => {
    res.redirect("/insert/details");
});
router.get('/details', (req, res, next) => {
    res.render('insert', {
        type: 'details'
    })
})
router.get('/dc', (req, res, next) => {
    res.render('insert', {
        type: 'dc'
    })
})
router.get('/shared', (req, res, next) => {
    res.render('insert', {
        type: 'shared'
    })
})



module.exports = router;
