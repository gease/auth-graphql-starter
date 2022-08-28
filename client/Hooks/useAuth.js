import React from "react";
import {useQuery} from "@apollo/client";
import {CURRENT_USER} from "../queries";
import {useNavigate} from "react-router-dom";

const useAuth = () => {
    const {loading, data, error } = useQuery(CURRENT_USER);
    let navigate = useNavigate()
    if (data && !data.user) {
        navigate('/login');
    }
}

export default useAuth;
