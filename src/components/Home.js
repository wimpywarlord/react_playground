import React, { Fragment } from "react";
import MyNavbar from "./Navbar";

import { Link } from "react-router-dom";

const Home = () => {
    const style = {
        // border: " 2px solid red",
        fontSize: "2rem",
        textDecoration: "underline",
        color: "teal",
    };
    return (
        <Fragment>
            <MyNavbar></MyNavbar>
            <div className="row">
                <div style={style} className="col-6 text-right">
                    <Link to="/addTask">Add Task</Link>
                </div>
                <div style={style} className="col-6 text-left">
                    <Link to="/view"> View List</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
