const express = require('express');
const teacherCtrl = require('./../controllers/teacher.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router({mergeParams: true});

router.route('/')
/** Get /api/teachers - Get list of teachers*/
    .get(asyncHandler(teacherCtrl.list))
    .post(asyncHandler(teacherCtrl.create));

router.route('/:teacherId')
/** GET /api/teachers/:teacherId - Get teacher */
    .get(asyncHandler(teacherCtrl.get))
    .delete(asyncHandler(teacherCtrl.destroy));

/** Load teacher when API with teacherId route parameter is hit */
router.param('teacherId', asyncHandler(teacherCtrl.load));

module.exports =  router;