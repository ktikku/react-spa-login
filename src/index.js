import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
