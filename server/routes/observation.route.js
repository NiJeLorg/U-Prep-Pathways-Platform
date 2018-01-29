import express from 'express';
import observationCtrl from './../controllers/observation.controller';
import path from 'path';
import multer from 'multer';
import crypto from 'crypto';
const router = express.Router();
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) return callback(err);

            callback(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});
const upload = multer({ storage : storage });
router.route('/')
/** Get /api/observations - Get list of observations*/
    .get(observationCtrl.list)
    .post(upload.array('attachments', 100), observationCtrl.create);

router.route('/:observationId')
/** GET /api/observations/:observationId - Get observation */
    .get(observationCtrl.get)
/** POST /api/observations/:observationId - Save observation */
    .put(upload.array('attachments', 100), observationCtrl.update)
    /** DELETE /api/observations/:observationId - Delete observation */
    .delete(observationCtrl.remove);
/** Load observation when API with observationId route parameter is hit */
router.param('observationId', observationCtrl.load);
export default router;