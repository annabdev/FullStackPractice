import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TodoList extends Component {
    state = {
        todo: [],
    };

    //Update
    handleUpdate = async (e, _id) => {
        e.preventDefault();
        const update = JSON.stringify(this.state);
        await fetch("http://localhost:4000/" + _id, {
            method: "PUT",
            body: update,
            headers: {
                "Content-Type": "application/json"
            }
        });
        await this.getTodos();
    };

    //Delete
    handleDelete = async _id => {
        await fetch("http://localhost:4000/" + _id, {
            method: "DELETE"
        });
        await this.getTodos();
    };

    //Get "Read"
    getTodos = async () => {
        return fetch("http://localhost:4000")
        .then(results => {
            return results.json();
        })
        .then(results => {
            this.setState({ todo: results });
        });
    };
    filterTodos = e => {
        let todo = this.state.todo;
        todo = todo.filter(todo => {
            return (todo) !==1
        });
        this.setState({ todo: todo.todo });
    };

    async componentDidMount() {
        await this.getTodos();
    }
  render(){
      console.log(this.state);
  return (
    <div>
    {this.state.todo.map( (todo, index) => (
        <div className="border" key={index}>
        <h2>Todo: {todo}</h2>
        <button
        type="button"
        onClick={() => this.handleDelete(todo._id)}
        >
        Delete</button>

        <button
        type="button"
        onClick={() => this.handleUpdate(todo._id)}
        >
        Update</button>
        <form onSubmit={e => this.handleUpdate(todo._id)}>
        <input
        type="text"
        placeholder="Add Todo"
        onChange={e =>
        this.setState({ todo: e.target.value })}
        />
        </form>
        <br />
        <form onSubmit={e => this.handleUpdate(todo._id)}>
        <input
        type="text"
        placeholder="Priority"
        onChange={e =>
        this.setState({ priority: e.target.value })}
        />
        <button type="submit">
        Submit
        </button>
        </form>
        </div>
    ) ) }
      <br />
     <Link to="/">Home</Link>
     <br />
      <Link to="/create">Create New</Link>
    </div>
    
  );
}}

export default TodoList;