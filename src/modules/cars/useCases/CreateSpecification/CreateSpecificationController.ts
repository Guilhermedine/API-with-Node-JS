import { CreateSpecificationUseCase } from '../CreateSpecification/CreateSpecificationUseCase'
import { Request , Response } from 'express'



class CreateSpecificationController {

  constructor( private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response) { 
    const { name, description} = req.body;

    this.createSpecificationUseCase.execute({name,description,});
  
    return res.status(201).send();
  }
}



export { CreateSpecificationController };