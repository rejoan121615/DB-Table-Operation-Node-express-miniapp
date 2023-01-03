const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();

// delete data
router.get("/reports", (req, res, next) => {
    res.render("Record-list");
});

module.exports = router;
