import React from "react";
import {useMutation} from "@apollo/client";

import {LOGOUT, CURRENT_USER} from "../queries";

const Logout = () => {
    const [mutate, {data, error, loading}] = useMutation(LOGOUT);
    const onClick = () => mutate({refetchQueries: [CURRENT_USER]});


    return <a onClick={onClick}>Logout</a>;

}

export default Logout;
