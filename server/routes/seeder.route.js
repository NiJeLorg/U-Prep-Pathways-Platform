const express = require("express");
const seederCtrl = require("./../controllers/seeder.controller");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.route("/teachers").post(asyncHandler(seederCtrl.seedTeacher));

router.route("/grades").post(asyncHandler(seederCtrl.seedGrades));

router.route("/subjects").post(asyncHandler(seederCtrl.seedSubjects));

module.exports = router;
