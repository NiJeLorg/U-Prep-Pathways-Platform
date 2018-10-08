const express = require('express');
const scoreCtrl = require('./../controllers/score.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.route('/')
    .get(asyncHandler(scoreCtrl.list))
    .post(asyncHandler(scoreCtrl.create));

router.route('/:scoreId')
    .get(asyncHandler(scoreCtrl.get))
    .delete(asyncHandler(scoreCtrl.remove));


router.param('scoreId', asyncHandler(scoreCtrl.load));

module.exports = router;