import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
  return (
    <div>
      Hi from Home
      <br />
      <Link to="/todolist">Todo List</Link>
     <br />
      <Link to="/create">Create New</Link>
    </div>
  );
}}

export default Home;
