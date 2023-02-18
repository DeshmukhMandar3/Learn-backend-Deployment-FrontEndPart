import React from "react";
import axios from "axios";
import "./AddTodo.css";

function AddTodo() {
  const [task, setTask] = React.useState("");
  const handleClick = async () => {
    const token = localStorage.getItem("token");
    const todo = { task };
    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:8080/todo/add",
        headers: { authorization: token },
        data: todo,
      });
      console.log(data);
      alert("Task added to todo");
      setTask("");
    } catch (err) {
      console.log(err);
      alert("Unable to add todo");
    }
  };
  return (
    <div className="add">
      <h1>Add Todo</h1>
      <input
        placeholder="Write your task here"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default AddTodo;
