import multer from "multer"
import { Router } from "express"
import { CreateUserController } from "@modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../../../../config/upload"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", uploadAvatar.single("avatar"),ensureAuthenticated, updateUserAvatarController.handle);


export { usersRoutes }


