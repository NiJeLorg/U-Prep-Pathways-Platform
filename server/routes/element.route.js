import express from 'express';
import elementCtrl from './../controllers/element.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
/** Get /api/elements - Get list of elements*/
    .get(asyncHandler(elementCtrl.list));

router.route('/:elementId')
/** GET /api/elements/:elementId - Get element */
    .get(asyncHandler(elementCtrl.get));
/** Load element when API with elementId route parameter is hit */
router.param('elementId', asyncHandler(elementCtrl.load));
export default router;