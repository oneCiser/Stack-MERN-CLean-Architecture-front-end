import axios from "axios"

import {
    BASE_URL
} from "./config"
import IQueryUser from "../schemas/QueryUser";
import IUserBase from "../schemas/userbase";
import IUserDB from "../schemas/userDB";
const APP_V = "v1"

const client = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/${APP_V}/auth`,
});

const signUp = (user: IUserBase) => {
    return client.post<IUserDB>("/signup", user);
}

const login = (user: IUserBase) => {
    return client.post<IUserDB>("/login", user);
}

const logout = () => {
    return client.post("/logout");
}

export {
    signUp,
    login,
    logout
}