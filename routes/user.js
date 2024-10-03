import { Router } from "express";
import { register, login, logout} from "../controllers/user.js"

// create router
const UserRouter = Router();

// Define router
UserRouter.post('/users/register', register);

UserRouter.post('/users/login', login);

UserRouter.post('/users/logout', logout);

// Export router
export default UserRouter;