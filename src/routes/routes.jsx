import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodo from "../components/todo/AddTodo";
import GetTodo from "../components/todo/GetTodo";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/getTodo"} element={<GetTodo />} />
      <Route path={"/addTodo"} element={<AddTodo />} />
    </Routes>
  );
};

export default AllRoutes;
