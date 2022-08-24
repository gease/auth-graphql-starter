import React from "react";

import {LOGIN} from "../queries";
import AuthForm from "./AuthForm";

const Login = () => {
    return <AuthForm mutation={LOGIN} button='Login'/>
}

export default Login;
