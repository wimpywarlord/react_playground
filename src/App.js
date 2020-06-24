import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/addTask">
                        <AddTask></AddTask>
                    </Route>
                    <Route path="/view">
                        <TodoList></TodoList>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
