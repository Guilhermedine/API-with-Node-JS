import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/Implementations/SpecificationsRepository';

import { createSpecificationController } from '../modules/cars/useCases/CreateSpecification';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", ( req, res) => {
  return createSpecificationController.handle( req,res);
})


export { specificationsRoutes }