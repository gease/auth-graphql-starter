import React from "react";

import {SIGNUP} from "../queries";
import AuthForm from "./AuthForm";

const Login = () => {
    return <AuthForm mutation={SIGNUP} button='Sign up'/>
}

export default Login;
