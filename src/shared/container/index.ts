import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/Implementations/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/repositories/Implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { container } from 'tsyringe'


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
)