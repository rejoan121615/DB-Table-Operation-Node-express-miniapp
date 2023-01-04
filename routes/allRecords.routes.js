const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();

// delete data
router.get("/", (req, res, next) => {
    res.redirect('reports/all')
});
router.get("/all", (req, res, next) => {
    res.render("Record-list", {
        type: "all",
    });
});
router.get("/dc", (req, res, next) => {
    res.render("Record-list", {
        type: 'dc'
    });
});
router.get("/details", (req, res, next) => {
    res.render("Record-list", {
        type: "details",
    });
});
router.get("/shared", (req, res, next) => {
    res.render("Record-list", {
        type: "shared",
    });
});

module.exports = router;
