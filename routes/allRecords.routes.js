const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// delete data
router.get("/reports", (req, res, next) => {
    res.render('Record-list')

});

module.exports = router;
