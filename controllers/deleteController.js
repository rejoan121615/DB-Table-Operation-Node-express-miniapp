const DcModel = require("../model/DcModel");
const DetailsModel = require("../model/DetailsModel");
const SharedModel = require("../model/SharedModel");
const {
    findDetailsRecord,
    findDcRecord,
    findSharedRecord,
} = require("./CommonController");

exports.deleteGet = async (req, res, next) => {
    const query = req.query.delete;
    let alertObj = {
        status: false,
    };
    if (Boolean(query)) {
        alertObj.status = true;
        alertObj.message = "Deleted successfully";
        alertObj.style = "success";
    }
    res.render("Delete", {
        type: req.params.url,
        alert: alertObj,
        data: [],
        action: {
            delete: false,
            edit: false,
        },
    });
};

exports.deletePost = async (req, res, next) => {
    const reqType = req.params.url;
    // handle Delete and search req differntly
    if (Object.keys(req.body).length <= 3) {
        switch (reqType) {
            case "details":
                const detailsRecord = await findDetailsRecord(
                    req.body.visys_name,
                    req.body.visys_url,
                    req.body.visys_port
                );
                if (detailsRecord !== null) {
                    res.setHeader(
                        "Set-Cookie",
                        `record_Id=${detailsRecord.dataValues.id}`
                    ).render("Delete", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "Record found",
                            style: "success",
                        },
                        data: [{ ...detailsRecord.dataValues }],
                        action: {
                            delete: true,
                            edit: false,
                        },
                    });
                } else {
                    res.render("Delete", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "No data found based on your search",
                            style: "fail",
                        },
                        data: [],
                        action: {
                            delete: false,
                            edit: false,
                        },
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
                    res.render("Delete", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "Record found",
                            style: "success",
                        },
                        data: [{ ...dcRecords.dataValues }],
                        action: {
                            delete: true,
                            edit: false,
                        },
                    });
                } else {
                    res.render("Delete", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "No data found based on your search",
                            style: "fail",
                        },
                        data: [],
                        action: {
                            delete: false,
                            edit: false,
                        },
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
                    res.render("Delete", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "Record found",
                            style: "success",
                        },
                        data: [{ ...sharedRecord.dataValues }],
                        action: {
                            delete: true,
                            edit: false,
                        },
                    });
                } else {
                    res.render("Delete", {
                        type: reqType,
                        alert: {
                            status: true,
                            message: "No data found based on your search",
                            style: "fail",
                        },
                        data: [],
                        action: {
                            delete: false,
                            edit: false,
                        },
                    });
                }
                break;
        }
    } else {
        switch (reqType) {
            case "details":
                await DetailsModel.update(
                    { ...req.body },
                    {
                        where: { id: req.cookies.record_Id },
                    }
                );
                res.render("Delete", {
                    type: reqType,
                    alert: {
                        status: true,
                        message: "Record updated successfully",
                        style: "success",
                    },
                    data: [],
                    action: {
                        delete: true,
                        edit: false,
                    },
                });

                break;
            case "dc":
                await DcModel.update(
                    { ...req.body },
                    {
                        where: { id: req.cookies.record_Id },
                    }
                );
                res.render("Delete", {
                    type: reqType,
                    alert: {
                        status: true,
                        message: "Record updated successfully",
                        style: "success",
                    },
                    data: [],
                    action: {
                        delete: true,
                        edit: false,
                    },
                });
                break;
            case "shared":
                await SharedModel.update(
                    { ...req.body },
                    {
                        where: { id: req.cookies.record_Id },
                    }
                );
                res.render("Delete", {
                    type: reqType,
                    alert: {
                        status: true,
                        message: "Record updated successfully",
                        style: "success",
                    },
                    data: [],
                    action: {
                        delete: false,
                        edit: false,
                    },
                });

                break;
        }
    }
};

exports.singleRecordDeleteGet = async (req, res, next) => {
    const reqType = req.params.url;
    const postId = req.params.postId;

    // if delete then redirect

    switch (reqType) {
        case "details":
            const findDetailsRecord = await DetailsModel.findByPk(postId);
            const deleteDetails = await findDetailsRecord.destroy();
            if (deleteDetails) {
                res.redirect(`/delete/${reqType}/?delete=true`);
                // res.render("Delete", {
                //     type: reqType,
                //     alert: {
                //         status: true,
                //         message: "Record Deleted successfully",
                //         style: "success",
                //     },
                //     data: [],
                //     action: {
                //         delete: false,
                //         edit: false,
                //     },
                // });
            }
            break;
        case "dc":
            const findDcRecord = await DcModel.findByPk(postId);
            const deleteDC = await findDcRecord.destroy();
            if (deleteDC) {
                res.redirect(`/delete/${reqType}/?delete=true`);
                // res.render("Delete", {
                //     type: reqType,
                //     alert: {
                //         status: true,
                //         message: "Record Deleted successfully",
                //         style: "success",
                //     },
                //     data: [],
                //     action: {
                //         delete: false,
                //         edit: false,
                //     },
                // });
            }
            break;
        case "shared":
            const findSharedRecord = await SharedModel.findByPk(postId);
            const deleteShared = await findSharedRecord.destroy();
            if (deleteShared) {
                res.redirect(`/delete/${reqType}/?delete=true`);
                // res.render("Delete", {
                //     type: reqType,
                //     alert: {
                //         status: true,
                //         message: "Record Deleted successfully",
                //         style: "success",
                //     },
                //     data: [],
                //     action: {
                //         delete: false,
                //         edit: false,
                //     },
                // });
            }
            break;
    }
};
