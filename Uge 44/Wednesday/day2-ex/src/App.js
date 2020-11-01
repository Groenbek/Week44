import logo from "./logo.svg";
import "./App.css";
import Count from "./Count";
import Joke from "./Joke";
import ListDemo from "./ListDemo";
import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <h1>Velkommen til forsiden</h1>
      <Count />
      <Joke />
      {/*       <ListDemo /> */}
    </div>
  );
};

export default App;
