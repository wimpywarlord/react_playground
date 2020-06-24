import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTaskAction } from "../store/actions";

const AddTask = () => {
    const style = {
        width: "50%",
        margin: "auto",
    };

    // const addTask = useSelector((state) => state.addTask);
    const dispatch = useDispatch();
    return (
        <div>
            <label for="exampleInputEmail1">Enter Task</label>
            <input
                style={style}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
            ></input>
            <Link to="/">
                <button type="button" className="btn btn-danger m-3">
                    Back
                </button>
            </Link>
            <Link to="/view">
                <button
                    onClick={() => dispatch(addTaskAction("TASk"))}
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
