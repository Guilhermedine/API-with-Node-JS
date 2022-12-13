import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/Implementations/SpecificationsRepository';

import { CreateSpecificationController } from '../modules/cars/useCases/CreateSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController()

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", createSpecificationController.handle)


export { specificationsRoutes }