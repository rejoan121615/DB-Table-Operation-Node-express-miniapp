const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();

// search data
router.get("/", (req, res, next) => {
    res.redirect('/delete/dc');
});


router.get('/dc', (req, res, next) => {
    res.render('Delete', {
        type: 'dc'
    })
})
router.get('/details', (req, res, next) => {
    res.render('Delete', {
        type: 'details'
    })
})
router.get('/shared', (req, res, next) => {
    res.render('Delete', {
        type: 'shared'
    })
})


module.exports = router;
