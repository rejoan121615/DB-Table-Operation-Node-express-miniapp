const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// delete data
router.get("/delete", (req, res, next) => {
    res.render("Delete");
});



module.exports = router;
