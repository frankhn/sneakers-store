import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import sneakers from './sneakers/sneakers.route'
import swaggerDocument from 'swagger/v1';

const router = Router();

router.use('/sneakers', sneakers)
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
