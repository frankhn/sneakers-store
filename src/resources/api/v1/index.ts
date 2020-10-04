import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import sneakers from './sneakers/sneakers.route'
import swaggerDocument from 'resources/api/v1/swagger';

const router = Router();

router.use('/sneakers', sneakers)
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
