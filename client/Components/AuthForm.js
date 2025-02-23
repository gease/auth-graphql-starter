import React from "react";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";


import {CURRENT_USER} from "../queries";

const AuthForm = ({mutation, button}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mutate, {data, loading, error}] = useMutation(mutation, {refetchQueries: [CURRENT_USER]});
    const {loading: loadingUser, data: dataUser, error: errorUser } = useQuery(CURRENT_USER);

    if ((dataUser && dataUser.currentUser))  {
        return <Navigate to='/' />
    }

    let errorsDisplayed = '';
    if (error) {
        if (error.graphQLErrors) {
            errorsDisplayed = <ul className="card-content white-text">{error.graphQLErrors.map(item => <li>{item.message}</li>)}</ul>;
        }
        if (error.networkError) {
            errorsDisplayed = <div className="card-content white-text">{error.networkError.message}</div>;
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
        mutate({variables:{email, password}}).catch(error => {});
    }

    return <form onSubmit={onSubmit}>
        {errorsDisplayed ? <div className='card red'>{errorsDisplayed}</div> : ''}
        <input name='email' placeholder='you@somewhere.com' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type='password' placeholder='Something you will forget' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
        <button>{button}</button>
    </form>
}

export default AuthForm;
