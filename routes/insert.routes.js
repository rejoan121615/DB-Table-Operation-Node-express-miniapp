const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// insert data
router.get("/insert", (req, res, next) => {
    res.render("insert", {
        result: [],
        alert: {
            status: false,
            class: "",
            message: "",
        },
    });
});
router.post("/insert", (req, res, next) => {
    const { id, location, url, port, status, flag } = req.body;
    DcDetailsModel.create({
        dc_id: id,
        dc_location: location,
        dc_url: url,
        dc_port: port,
        dc_status: status,
        dc_flag: flag,
    })
        .then((data) => {
            console.log(data);
            res.render("Insert", {
                result: [data.dataValues],
                alert: {
                    status: true,
                    class: "alert-success",
                    message: "Visys dc details data inserted  ",
                },
            });
        })
        .catch((error) => {
            console.log("got an error on data creation", error);
            res.render("Insert", {
                result: [],
                alert: {
                    status: false,
                    class: "alert-danger",
                    message: "Visys dc details data insert fail ",
                },
            });
        });
});

module.exports = router;
