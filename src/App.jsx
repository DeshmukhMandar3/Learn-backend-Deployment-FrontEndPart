import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/routes";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h1>Todo App</h1>
      <AllRoutes />
    </div>
  );
}

export default App;
