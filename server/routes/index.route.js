import express from 'express';
import gradeRoutes from './grade.route';
import schoolRoutes from './school.route';
import teacherRoutes from './teacher.route';
import observationRoutes from './observation.route';
import observationTypeRoutes from './observation_type.route';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const router = express.Router();
const swaggerDocument = YAML.load('./server/swagger/swagger.yaml');

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/schools', schoolRoutes);
router.use('/grades', gradeRoutes);
router.use('/teachers', teacherRoutes);
router.use('/observations', observationRoutes);
router.use('/observation_types', observationTypeRoutes);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;