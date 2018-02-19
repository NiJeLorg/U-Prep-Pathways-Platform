'use strict';

const http = require('http'),
    _ = require('lodash');

function response(res, code, data) {
    let template = {
        "meta": {
            "code": 200
        }
    };
    if (_.isObject(data)) {
        template["meta"]["code"] = code;
        if (data.hasOwnProperty("pagination")) {
            template["pagination"] = data.pagination;
            template["data"] = data.data;
        } else {
            template["data"] = data;
        }
        res
            .status(code)
            .json(template);
    } else {
        template["meta"]["code"] = code;
        template["meta"]["error_message"] = http.STATUS_CODES[code];
        res
            .status(code)
            .json(template);
    }
}

module.exports = function () {
    return function (req, res, next) {
        res.sendResponse = response;

        // 2XX Success
        res.sendOk = function (data) {
            res.sendResponse(res, 200, data);
        };

        res.sendCreated = function (data) {
            res.sendResponse(res, 201, data);
        };

        res.sendData = function (data) {
            res.sendResponse(res, 200, data);
        };

        // 4xx Client Error
        res.sendBadRequest = function (data) {
            res.sendResponse(res, 400, data);
        };

        res.sendUnauthorized = function (data) {
            res.sendResponse(res, 401, data);
        };

        res.sendForbidden = function (data) {
            res.sendResponse(res, 403, data);
        };

        res.sendNotFound = function (data) {
            res.sendResponse(res, 404, data);
        };

        res.sendMethodNotAllowed = function (data) {
            res.sendResponse(res, 405, data);
        };

        res.sendConflict = function (data) {
            res.sendResponse(res, 409, data);
        };

        // 5xx Server Error
        res.sendServerError = function (data) {
            res.sendResponse(res, 500, data);
        };

        return next();
    }
};
