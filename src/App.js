import React from "react";
import Board from "./components/Board";

import "./styles/root";

const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board></Board>
    </div>
  );
};

export default App;