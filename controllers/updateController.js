const DetailsModel = require("../model/DetailsModel");
const {
    findDetailsRecord,
    findDcRecord,
    findSharedRecord,
} = require("./CommonController");

exports.updateGet = (req, res, next) => {
    res.render("Edit", {
        type: req.params.url,
        alert: {
            status: false,
        },
        data: [],
    });
};

exports.updatePost = async (req, res, next) => {
    const reqType = req.params.url;
    // handle edit and search req differntly
    if (Object.keys(req.body).length <= 3) {
        switch (reqType) {
            case "details":
                const detailsRecord = await findDetailsRecord(
                    req.body.visys_name,
                    req.body.visys_url,
                    req.body.visys_port
                );
                if (detailsRecord !== null) {
                    res.render("Edit", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "Record found",
                            style: "success",
                        },
                        data: [{ ...detailsRecord.dataValues }],
                    });
                } else {
                    res.render("Edit", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "No data found based on your search",
                            style: "fail",
                        },
                        data: [],
                    });
                }
                break;
            case "dc":
                const dcRecords = await findDcRecord(
                    req.body.visys_dc_id,
                    req.body.visys_dc_location,
                    req.body.visys_dc_url
                );
                if (dcRecords !== null) {
                    res.render("Edit", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "Record found",
                            style: "success",
                        },
                        data: [{ ...dcRecords.dataValues }],
                    });
                } else {
                    res.render("Edit", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "No data found based on your search",
                            style: "fail",
                        },
                        data: [],
                    });
                }
                break;
            case "shared":
                const sharedRecord = await findSharedRecord(
                    req.body.visys_name,
                    req.body.visys_url,
                    req.body.visys_port
                );
                if (sharedRecord !== null) {
                    res.render("Edit", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "Record found",
                            style: "success",
                        },
                        data: [{ ...sharedRecord.dataValues }],
                    });
                } else {
                    res.render("Edit", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "No data found based on your search",
                            style: "fail",
                        },
                        data: [],
                    });
                }
                break;
        }
    } else {
        switch (reqType) {
            case "details":
                // DetailsModel.update(
                //     { ...req.body },
                //     {
                //         where: {},
                //     }
                // );
                break;
            case "dc":
                console.log(req.body);
                break;
            case "shared":
                console.log(req.body);

                break;
        }
    }
};
