const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();

// search data
router.get("/delete", (req, res, next) => {
    res.render("Delete", { result: false });
});

// search data
router.post("/delete", (req, res, next) => {
    const { id, location } = req.body;
    DcDetailsModel.findOne({ where: { dc_id: id, dc_location: location } })
        .then((data) => {
            res.render("Delete", {
                result: data.dataValues,
                alert: {
                    status: true,
                    message: "Delete successfully",
                    class: "alert-success",
                },
            });
        })
        .catch((error) => {
            console.log("got an error of getting data");
            res.render("Delete", {
                result: false,
                alert: {
                    status: true,
                    message: "Delete successfully",
                    class: "alert-success",
                },
            });
        });
    // next()
});

// delete a product
router.get("/delete/:prodId", (req, res, next) => {
    const prodId = req.params.prodId;
    DcDetailsModel.findOne({
        where: {
            dc_id: prodId,
        },
    })
        .then((data) => {
            data.destroy().then(() => {
                res.redirect("/delete");
                next();
            });
        })
        .catch((error) => {
            res.render("Delete", {
                alert: {
                    status: true,
                    message: "Delete successfully",
                    class: "alert-success",
                },
            });
        });
});

// router redirect

module.exports = router;
