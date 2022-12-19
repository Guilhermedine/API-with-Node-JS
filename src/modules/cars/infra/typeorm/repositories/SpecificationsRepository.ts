import { Repository } from 'typeorm';
import { Specification } from "../../typeorm/entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../../../repositories/ISpecificationsRepository'
import { PostgresDataSource } from '@shared/infra/typeorm/ormconfig'


class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(Specification)
  }
  
  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    });
    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({where:{name}});
    return specification;
  }
}

export { SpecificationsRepository }

