import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

import { useDispatch } from "react-redux";
import { addTaskAction } from "../store/actions/index";

const AddTask = () => {
    const style = {
        width: "50%",
        margin: "auto",
    };

    const dispatch = useDispatch();

    const localAdd = () => {
        console.log($(".input_of_task").val());
        dispatch(addTaskAction($(".input_of_task").val()));
    };

    return (
        <div>
            <label>Enter Task</label>
            <input
                style={style}
                type="email"
                className="input_of_task"
                id="exampleInputEmail1"
            ></input>
            <Link to="/">
                <button type="button" className="btn btn-danger m-3">
                    Back
                </button>
            </Link>
            <Link to="/view">
                <button
                    onClick={() => localAdd()}
                    type="button"
                    className="btn btn-success m-3"
                >
                    Submit
                </button>
            </Link>
        </div>
    );
};

export default AddTask;
