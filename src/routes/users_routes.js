import { Router } from "express";
import {createNewUser, getUsers,loginUser,deleteUser} from '../model/Users'

const userrouter = Router();

userrouter.get("",getUsers);

userrouter.get("",getUsers);

userrouter.post("/login", loginUser);

userrouter.post("/create", createNewUser);

userrouter.delete("/delete", deleteUser);

module.exports = userrouter;

//export default router;