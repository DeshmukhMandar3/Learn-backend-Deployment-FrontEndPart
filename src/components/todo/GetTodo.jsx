import React from "react";
import axios from "axios";
import "./GetTodo.css";
const GetTodo = () => {
  const [todo, setTodo] = React.useState(null);
  const [Flag, setFlag] = React.useState(false);

  const handleChange = async (id, flag) => {
    const change = { isCompleted: !flag };
    const token = localStorage.getItem("token");
    try {
      let data = await axios({
        method: "patch",
        url: `http://localhost:8080/todo/update/${id}`,
        data: change,
        headers: { Authorization: token },
      });
      console.log(data);
      setFlag(!Flag);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      let data = await axios({
        method: "delete",
        url: `http://localhost:8080/todo/delete/${id}`,
        headers: { Authorization: token },
      });
      console.log(data);
      setFlag(!Flag);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      let token = localStorage.getItem("token");
      try {
        const data = await axios({
          method: "get",
          url: "http://localhost:8080/todo/",
          headers: { Authorization: token },
        });
        setTodo(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [Flag]);

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todo &&
          todo.map((el) => {
            return (
              <div className="box">
                <h3>{el.task}</h3>
                <div className="buttons">
                  <button
                    onClick={() => {
                      handleChange(el._id, el.isCompleted);
                    }}
                  >
                    {el.isCompleted ? "Completed" : "Not Completed"}
                  </button>
                  <button onClick={() => handleDelete(el._id)}>
                    Delete Todo
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetTodo;
