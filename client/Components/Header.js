import React from "react";
import {NavLink} from "react-router-dom";
import {useQuery} from "@apollo/client";

import {CURRENT_USER} from "../queries";
import Logout from "./Logout";

const Header = () => {

    const {data, loading, err} = useQuery(CURRENT_USER);

    if (loading || err) return <div></div>;

    let menu = '';
    if (!data.currentUser) {
        menu = <ul className="right">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </ul>;
    }
    else {
        menu = <ul className="right">
            <li>Welcome {data.currentUser.email}</li>
            <li><Logout/></li>
        </ul>;
    }

    return <nav className="row">
        <ul className="left">
            <li><NavLink to='/'>Home</NavLink></li>
        </ul>
        {menu}
    </nav>
}

export default Header;
