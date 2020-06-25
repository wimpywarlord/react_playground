import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.tasks);
    return (
        <div>
            {todos.map((todo) => {
                return <li>{todo}</li>;
            })}
        </div>
    );
};

export default TodoList;
