const { Router } = require("express");
const DcDetailsModel = require("../model/DcDetailsModel");
const router = Router();

// insert data
router.get("/insert", (req, res, next) => {
    res.render("insert");
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
            res.render("Insert");
        })
        .catch((error) => {
            console.log("got an error on data creation", error);
            res.render("Insert");
        });
});

// delete data
// router.get("/delete", (req, res, next) => {
//     res.render("Delete");
// });
// update data
// router.get("/update", (req, res, next) => {
//     res.render("Update");
// });

// show all data
// router.get("/show-all", (req, res, next) => {
//     res.render("ShowAll");
// });

module.exports = router;
