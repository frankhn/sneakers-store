import { Router } from 'express';
import controller from './sneakers.controller';
import * as validators from './sneakers.validation'

// Sneakers
const router = Router();


router
    .route('/')
    .get(validators.getMany, controller.getMany);

router
    .route('/:id')
    .all(validators.getOne, controller.checkRecord)
    .get(controller.getOne)

export default router;
