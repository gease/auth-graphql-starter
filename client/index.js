import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from "react-router";
import {BrowserRouter, HashRouter, Routes} from "react-router-dom";
import {createHttpLink, ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import App from "./Components/App";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Dashboard from "./Components/Dashboard";

const link = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route index element={<Main/>}/>
                        <Route path='dashboard' element={<Dashboard/>}/>
                        <Route path='signup' element={<Signup/>}/>
                        <Route path='login' element={<Login/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
