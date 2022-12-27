const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// delete data
router.get("/all-records", (req, res, next) => {
    DcDetailsModel.findAll()
        .then((data) => {
            return res.render("allRecords", {
                result: data,
                alert: {
                    status: true,
                    message: "Delete successfully",
                    class: "alert-success",
                },
            });
        })
        .catch((error) => {
            console.log("got an error on data load");
            next();
        });
    // res.render("allRecords", { result: [] });
});

module.exports = router;
