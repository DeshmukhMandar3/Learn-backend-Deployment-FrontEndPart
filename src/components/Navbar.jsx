import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/getTodo"}>GetTodos</Link>
      <Link to={"/addTodo"}>AddTodos</Link>
    </div>
  );
};

export default Navbar;
