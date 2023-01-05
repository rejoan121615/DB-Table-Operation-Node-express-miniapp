const DetailsModel = require("../model/DetailsModel");
const DcModel = require("../model/DcModel");
const SharedModel = require("../model/SharedModel");

module.exports.insertGet = (req, res, next) => {
    const urlType = req.params.url;
    res.render("insert", {
        type: urlType,
        alert: {
            status: false,
        },
        data: []
    });
};

module.exports.insertPost = async (req, res, next) => {
    const urlType = req.params.url;
    // push data based on table type
    switch (urlType) {
        case "details":
            // ceck data first if available
            const checkDetailsRecord = await DetailsModel.findOne({
                where: {
                    visys_name: req.body.visys_name,
                    visys_url: req.body.visys_url,
                    visys_port: req.body.visys_port,
                },
            });
            // if the data is not avaialbe push this new data
            if (checkDetailsRecord === null) {
                const newRecord = await DetailsModel.create({ ...req.body });
                res.render("insert", {
                    type: urlType,
                    alert: {
                        status: true,
                        message: "Data inserted successfully",
                        style: "success",
                    },
                    data: [{ ...newRecord, type: urlType }],
                });
            } else {
                res.render("insert", {
                    type: urlType,
                    alert: {
                        status: true,
                        message: "Data already available",
                        style: "available",
                    },
                    data: []
                });
            }
            break;
        case "dc":
            // ceck data first if available
            let checkDcRecord = await DcModel.findOne({
                where: {
                    visys_dc_id: req.body.visys_dc_id,
                    visys_dc_location: req.body.visys_dc_location,
                    visys_dc_url: req.body.visys_dc_url,
                },
            });
            // if the data is not avaialbe push this new data
            if (checkDcRecord === null) {
                const newRecord = await DcModel.create({ ...req.body });
                res.render("insert", {
                    type: urlType,
                    alert: {
                        status: true,
                        message: "Data inserted successfully",
                        style: "success",
                    },
                    data: [{ ...newRecord, type: urlType }],
                });
            } else {
                res.render("insert", {
                    type: urlType,
                    alert: {
                        status: true,
                        message: "Data already available",
                        style: "available",
                    },
                    data: []
                });
            }
            break;
        case "shared":
            // ceck data first if available
            let checkSharedRecord = await SharedModel.findOne({
                where: {
                    visys_name: req.body.visys_name,
                    visys_url: req.body.visys_url,
                    visys_port: req.body.visys_port,
                },
            });
            // if the data is not avaialbe push this new data
            if (checkSharedRecord === null) {
                const newRecord = await SharedModel.create({ ...req.body });
                res.render("insert", {
                    type: urlType,
                    alert: {
                        status: true,
                        message: "Data inserted successfully",
                        style: "success",
                    },
                    data: [{ ...newRecord, type: urlType }],
                });
            } else {
                res.render("insert", {
                    type: urlType,
                    alert: {
                        status: true,
                        message: "Data already available",
                        style: "available",
                    },
                    data: []
                });
            }
            break;
    }
};
