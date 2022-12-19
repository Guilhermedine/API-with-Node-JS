import { Category } from '../../typeorm/entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../../../repositories/ICategoriesRepository';
import { Repository } from 'typeorm';
import { PostgresDataSource } from '@shared/infra/typeorm/ormconfig'



class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    constructor() { 
      this.repository = PostgresDataSource.getRepository(Category);
    }

    async create({description, name} : ICreateCategoryDTO): Promise<void> {
      const category = this.repository.create({
        description,
        name,
      });
    
      await this.repository.save(category)
    }

    async list(): Promise<Category[]>{
      const categories = await this.repository.find();
      return categories;
    }

    async findByName(name: string): Promise<Category> {
      const category = await this.repository.findOne({where: { name }});
      return category;
    }
}



export { CategoriesRepository }