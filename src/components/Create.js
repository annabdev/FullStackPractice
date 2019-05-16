import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Create extends Component {
  state = {
    todo: "",
    priority: ""
  };

//Post 
handleSubmit = async e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    await fetch("http://localhost:4000", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    });
};

  render(){
    console.log(this)
    console.log(this.state)
  return (
    <div>
      <h1>Create New Todo</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/todolist">Todo List</Link>
      

      {/* Form input sent to state utilizing onChange */}
      <br />
      <br />
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
      <label htmlFor="InputTodo">Todo</label>
      <input
        type="text"
        className="form-control"
        id="InputTodo"
        aria-describedby="TodoHelp"
        placeholder="Todo"
        onChange={e => this.setState({ todo: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="InputPriority">Priority</label>
        <input
        type="text"
        className="form-control"
        id="InputPriority"
        placeholder="Priority"
        onChange={e => this.setState({ priority: e.target.value})}
        />
      </div>
      <button type="submit" className="btn btn-primary">
      Submit 
      </button>
      </form>

    </div>
   
  );
}}

export default Create;
