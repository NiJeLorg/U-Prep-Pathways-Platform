const express = require("express");
const evidenceCtrl = require("./../controllers/evidence.controller");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router
    .route("/")
    .get(asyncHandler(evidenceCtrl.list))
    .post(asyncHandler(evidenceCtrl.create));

router.route("/:evidenceId").get(asyncHandler(evidenceCtrl.get));

// router.param('schoolId', asyncHandler(clusterCtrl.load));

module.exports = router;
