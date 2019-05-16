import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import TodoList from "./components/TodoList";


function Routing () {
    return (
        <Router>
            <Switch>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/create/" component={Create} />
                    <Route path="/todolist" component={TodoList} />
                </div>
            </Switch>
        </Router>
    );
}

export default Routing;