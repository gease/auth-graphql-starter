import React from "react";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {

    useAuth();

    return <div>Dashboard</div>

}

export default Dashboard;
