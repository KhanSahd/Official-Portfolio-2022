import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import AnimatedRoutes from "./AnimatedRoutes";

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
