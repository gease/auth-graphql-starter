import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";


class App extends React.Component {
    render() {
        return (
           <div className="container">
               <Header/>
               <Outlet/>
           </div>
        );
    }
}

export default App;
