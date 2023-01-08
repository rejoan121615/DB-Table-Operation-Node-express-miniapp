const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const { allRecordGet } = require("../controllers/AllRecords");
const router = Router();

// delete data
router.get("/", (req, res, next) => {
    res.redirect('reports/all')
});
router.get("/:url", allRecordGet);

module.exports = router;
