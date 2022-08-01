import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import AnimatedRoutes from "./AnimatedRoutes";
import About from "./components/About";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
