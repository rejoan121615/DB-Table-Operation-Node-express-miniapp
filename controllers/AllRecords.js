const DcModel = require("../model/DcModel");
const DetailsModel = require("../model/DetailsModel");
const SharedModel = require("../model/SharedModel");

exports.allRecordGet = async (req, res, next) => {
    const type = req.params.url;
    const detailsRecord = await DetailsModel.findAll();
    const dcRecords = await DcModel.findAll();
    const sharedRecords = await SharedModel.findAll();
    const allTableData = [];
    switch (type) {
        case "details":
            // push details data
            detailsRecord.map((data) => {
                data.dataValues.type = "details";
                allTableData.push(data.dataValues);
            });
            res.render("Record-list", {
                type: type,
                data: allTableData,
                action: {
                    edit: true,
                    delete: true,
                },
            });
            break;
        case "dc":
            // push dc data
            dcRecords.map((data) => {
                data.dataValues.type = "dc";
                allTableData.push(data.dataValues);
            });
            res.render("Record-list", {
                type: type,
                data: allTableData,
                action: {
                    edit: true,
                    delete: true,
                },
            });
            break;

        case "shared":
            // push shared data
            sharedRecords.map((data) => {
                data.dataValues.type = "shared";
                allTableData.push(data.dataValues);
            });
            res.render("Record-list", {
                type: type,
                data: allTableData,
                action: {
                    edit: true,
                    delete: true,
                },
            });
            break;
        default:
            // push details data
            detailsRecord.map((data) => {
                data.dataValues.type = "details";
                allTableData.push(data.dataValues);
            });
            // push dc data
            dcRecords.map((data) => {
                data.dataValues.type = "dc";
                allTableData.push(data.dataValues);
            });
            // push shared data
            sharedRecords.map((data) => {
                data.dataValues.type = "shared";
                allTableData.push(data.dataValues);
            });
            res.render("Record-list", {
                type: type,
                data: allTableData,
                action: {
                    edit: true,
                    delete: true,
                },
            });
            break;
    }
};
