const express = require('express');
const subjectCtrl = require('./../controllers/subject.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router({mergeParams: true});

router.route('/')
/** Get /api/subjects - Get list of subjects*/
    .get(asyncHandler(subjectCtrl.list))
    .post(asyncHandler(subjectCtrl.create))

router.route('/:subjectId')
/** GET /api/subjects/:subjectId - Get subject */
    .get(asyncHandler(subjectCtrl.get))
    .delete(asyncHandler(subjectCtrl.destroy))
    .put(asyncHandler(subjectCtrl.update))
/** Load subject when API with subjectId route parameter is hit */
router.param('subjectId', asyncHandler(subjectCtrl.load));

module.exports = router;