const express = require("express");
const gradeRoutes = require("./grade.route");
const schoolRoutes = require("./school.route");
const subjectRoutes = require("./subject.route");
const seedRoutes = require("./seeder.route");
const teacherRoutes = require("./teacher.route");
const elementRoutes = require("./element.route");
const observationRoutes = require("./observation.route");
const observationTypeRoutes = require("./observation_type.route");
const observationEvidenceRoutes = require("./observation_evidence.route");
const observationClusterRoutes = require("./observation_cluster.route");
const indicatorScoreEvidenceRoutes = require("./indicator_score_evidence.route");
const indicatorScoreObservationEvidenceRoutes = require("./indicator_score_observation_evidence.route");
const scoreRoutes = require("./score.route");
const indicatorScoreRoutes = require("./indicator_score.route");
const evidenceRoutes = require("./evidence.route");
const clusterRoutes = require("./cluster.route");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const router = express.Router();
const swaggerDocument = YAML.load("./server/swagger/swagger.yaml");

router.get("/health-check", (req, res) => res.send("OK"));

router.use("/schools", schoolRoutes);
router.use("/grades", gradeRoutes);
router.use("/seed", seedRoutes);
router.use("/elements", elementRoutes);
router.use("/schools/:schoolId/grades", gradeRoutes);
router.use("/teachers", teacherRoutes);
router.use("/schools/:schoolId/grades/:gradeId/teachers", teacherRoutes);
router.use("/teachers/:teacherId/subjects", subjectRoutes);
router.use("/teachers/:teacherId/observations", observationRoutes);
router.use("/subjects", subjectRoutes);
router.use("/observations", observationRoutes);
router.use("/observation_clusters", observationClusterRoutes);
router.use("/observation_evidences", observationEvidenceRoutes);
router.use("/observation_types", observationTypeRoutes);
router.use("/scores", scoreRoutes);
router.use("/indicator_scores", indicatorScoreRoutes);
router.use("/clusters", clusterRoutes);
router.use("/evidences", evidenceRoutes);
router.use("/attach-evidence", indicatorScoreEvidenceRoutes);
router.use(
    "/attach-evidence-observations",
    indicatorScoreObservationEvidenceRoutes
);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
