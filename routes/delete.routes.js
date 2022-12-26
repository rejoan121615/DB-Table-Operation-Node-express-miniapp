const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// delete data
router.get("/delete", (req, res, next) => {
    res.render("Delete", { result: false });
});

// search delete search
router.post("/delete", (req, res, next) => {
    const { id, location } = req.body;
    DcDetailsModel.findOne({ where: { dc_id: id, dc_location: location } })
        .then((data) => {
            console.log(data.dataValues);
            res.render("Delete", { result: data.dataValues });
        })
        .catch((error) => {
            console.log("got an error of getting data");
            res.render('Delete', {})
        });
        // next()
});

module.exports = router;
