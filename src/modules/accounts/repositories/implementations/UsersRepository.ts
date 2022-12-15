import { IUserRepository } from '../IUserRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { Repository } from 'typeorm';
import { PostgresDataSource } from '../../../../database/ormconfig';




class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(User);
  }
  
  async create({ 
    name,
    email,
    driver_license,
    password 
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password 
    });
    
    await this.repository.save(user);
  } 
}


export { UsersRepository }