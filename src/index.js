import React from "react";
import ReactDOM from "react-dom";
import { Profiles } from "./components/profile";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Profiles />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
