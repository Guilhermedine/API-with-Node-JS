import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({
    name,
    username,
    email,
    driver_license,
    password
  }:ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      email,
      driver_license,
      password 
    })
  }
}

export { CreateUserUseCase }