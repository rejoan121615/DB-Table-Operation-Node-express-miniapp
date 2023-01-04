const { Router } = require("express");
const DcDetailsModel = require("../model/DcModel");
const router = Router();

// delete data
router.get("/", (req, res, next) => {
    res.redirect('/edit/dc');
});

router.get('/details', (req, res, next) => {
    res.render("Edit", { type: "details" });
})
router.get('/shared', (req, res, next) => {
    res.render("Edit", { type: "shared" });
})
router.get('/dc', (req, res, next) => {
    res.render('Edit', {type: 'dc'})
})

// search delete search
// router.post("/update", (req, res, next) => {
//     const { id, location } = req.body;
//     DcDetailsModel.findOne({ where: { dc_id: id, dc_location: location } })
//         .then((data) => {
//             res.render("Update", {
//                 result: data.dataValues,
//                 alert: {
//                     status: true,
//                     message: "",
//                 },
//             });
//         })
//         .catch((error) => {
//             res.render("Delete", {});
//         });
// });

// router.post("/update/:id", (req, res, next) => {
//     const pageId = req.params.id;
//     const { id, location, url, port, status, flag } = req.body;
//     console.log(req.body);
//     DcDetailsModel.findByPk(pageId).then((data) => {
//         data.update({
//             dc_id: Number(id),
//             dc_location: location,
//             dc_url: url,
//             dc_port: port,
//             dc_status: status,
//             dc_flag: flag,
//         })
//     });
// });

module.exports = router;
