const express = require('express');
const elementCtrl = require('./../controllers/element.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.route('/')
/** Get /api/elements - Get list of elements*/
    .get(asyncHandler(elementCtrl.list));

router.route('/:elementId')
/** GET /api/elements/:elementId - Get element */
    .get(asyncHandler(elementCtrl.get));
/** Load element when API with elementId route parameter is hit */
router.param('elementId', asyncHandler(elementCtrl.load));


module.exports =  router;