import { CreateUserController } from "../modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";
import multer from "multer"
import { Router } from "express"


const usersRoutes = Router();

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", updateUserAvatarController.handle);


export { usersRoutes }


