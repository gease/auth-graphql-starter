import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";


import {CURRENT_USER} from "../queries";

const AuthForm = ({mutation, button}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [mutate, {data, loading, error}] = useMutation(mutation);

    const onSubmit = (event) => {
        event.preventDefault();
        mutate({variables:{email, password}, refetchQueries: [CURRENT_USER]}).then(() => navigate('/'));
    }

    return <form onSubmit={onSubmit}>
        <input name='email' placeholder='you@somewhere.com' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type='password' placeholder='Something you will forget' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
        <button>{button}</button>
    </form>
}

export default AuthForm;
