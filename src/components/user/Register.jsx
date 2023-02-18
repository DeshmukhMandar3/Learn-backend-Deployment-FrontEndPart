import React from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, age: +age, email, password };
    try {
      const reg = await axios.post(
        "https://curious-ray-vestments.cyclic.app/user/register",
        data
      );
      console.log(reg);
      setName("");
      setAge(0);
      setEmail("");
      setPassword("");
      alert("Registration successful");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="name"
          className="input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="age"
          className="input"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          placeholder="email"
          className="input"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          className="input"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" className="input" />
      </form>
    </div>
  );
}

export default Register;
