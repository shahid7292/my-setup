import React from "react";
import "./app.css";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="text-green bg-cyan d-flex justify-content-center align-items-baseline">
      Rendered App component
      <i className={"fas fa-home"} />
    </div>
  );
}

export default App;
