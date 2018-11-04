const express = require("express");
const path = require("path");
const observationCtrl = require("./../controllers/observation.controller");
const multer = require("multer");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, "../../uploads"));
    },
    filename: function(req, file, cb) {
        const fileName = file.originalname.replace(/\s+/g, "");
        cb(null, fileName);
    }
});
const upload = multer({ storage: storage });
router
    .route("/")
    /** Get /api/observations - Get list of observations*/
    .get(asyncHandler(observationCtrl.list))
    .post(
        upload.array("attachments", 100),
        asyncHandler(observationCtrl.create)
    );

router
    .route("/:observationId")
    /** GET /api/observations/:observationId - Get observation */
    .get(asyncHandler(observationCtrl.get))
    /** POST /api/observations/:observationId - Save observation */
    .put(upload.array("attachments", 100), asyncHandler(observationCtrl.update))
    /** DELETE /api/observations/:observationId - Delete observation */
    .delete(asyncHandler(observationCtrl.remove));
/** Load observation when API with observationId route parameter is hit */
router.param("observationId", asyncHandler(observationCtrl.load));

module.exports = router;
