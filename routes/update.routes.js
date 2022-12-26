const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// delete data
router.get("/update", (req, res, next) => {
    res.render("Update", { result: false });
});

// search delete search
router.post("/update", (req, res, next) => {
    const { id, location } = req.body;
    DcDetailsModel.findOne({ where: { dc_id: id, dc_location: location } })
        .then((data) => {
            console.log(data.dataValues);
            res.render("Update", { result: data.dataValues });
        })
        .catch((error) => {
            console.log("got an error of getting data");
            res.render("Update", {});
        });
    // next()
});

module.exports = router;
