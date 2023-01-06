const DcModel = require("../model/DcModel");
const DetailsModel = require("../model/DetailsModel");
const SharedModel = require("../model/SharedModel");

exports.findDetailsRecord = (name, url, port) => {
    return DetailsModel.findOne({
        where: {
            visys_name: name,
            visys_url: url,
            visys_port: port,
        },
    });
};

exports.findDcRecord = (id, location, url) => {
    return DcModel.findOne({
        where: {
            visys_dc_id: id,
            visys_dc_location: location,
            visys_dc_url: url,
        },
    });
};

exports.findSharedRecord = (name, url, port) => {
    return SharedModel.findOne({
        where: {
            visys_name: name,
            visys_url: url,
            visys_port: port,
        },
    });
};
