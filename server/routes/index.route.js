import express from 'express';
import gradeRoutes from './grade.route';
import schoolRoutes from './school.route';
import subjectRoutes from './subject.route';
import seedRoutes from './seeder.route';
import teacherRoutes from './teacher.route';
import elementRoutes from './element.route';
import observationRoutes from './observation.route';
import observationTypeRoutes from './observation_type.route';
import observationEvidenceRoutes from './observation_evidence.route';
import observationClusterRoutes from './observation_cluster.route';
import clusterRoutes from './cluster.route';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const router = express.Router();
const swaggerDocument = YAML.load('./server/swagger/swagger.yaml');

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/schools', schoolRoutes);
router.use('/grades', gradeRoutes);
router.use('/seed', seedRoutes);
router.use('/elements', elementRoutes);
router.use('/schools/:schoolId/grades', gradeRoutes);
router.use('/teachers', teacherRoutes);
router.use('/schools/:schoolId/grades/:gradeId/teachers', teacherRoutes);
router.use('/teachers/:teacherId/subjects', subjectRoutes);
router.use('/subjects', subjectRoutes);
router.use('/observations', observationRoutes);
router.use('/observation_clusters', observationClusterRoutes);
router.use('/observation_evidences', observationEvidenceRoutes);
router.use('/observation_types', observationTypeRoutes);
router.use('/clusters', clusterRoutes);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;