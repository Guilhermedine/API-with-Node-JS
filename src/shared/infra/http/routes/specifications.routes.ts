import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

import { CreateSpecificationController } from '@modules/cars/useCases/CreateSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController()

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)


export { specificationsRoutes }