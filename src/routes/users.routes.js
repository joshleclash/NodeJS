import { Router } from "express";
import {createNewUser, getUsers,loginUser,deleteUser} from '../model/Users'

const router = Router();

router.get("/users", getUsers);

router.post("/login", loginUser);

router.post("/users/create", createNewUser);

router.delete("/users/delete", deleteUser);


export default router;