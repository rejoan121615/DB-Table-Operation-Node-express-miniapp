const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// delete data
router.get("/all-records", (req, res, next) => {
    DcDetailsModel.findAll()
        .then((data) => {
            console.log(data[0].dataValues);
            res.render("allRecords", { result: data });
        })
        .catch((error) => {
            console.log("got an error on data load");
            next();
        });
});

module.exports = router;
