import React from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const rec = await axios.post("http://localhost:8080/user/login", data);
      console.log(rec);
      localStorage.setItem("token", rec.data.token);
      setEmail("");
      setPassword("");
      alert("Login Successful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          className="input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" className="input" />
      </form>
    </div>
  );
};

export default Login;
