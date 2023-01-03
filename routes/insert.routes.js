const { Router } = require("express");
// const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// insert data
router.get("/insert", (req, res, next) => {
    res.render("insert");
});
router.post("/insert", (req, res, next) => {
    console.log(req.body)
    res.render("insert");
});

module.exports = router;
