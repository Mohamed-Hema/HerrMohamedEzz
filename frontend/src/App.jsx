import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
import Lessons from "./pages/Lessons";

function App() {
  return (
    <Router>
      <div className="content">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
