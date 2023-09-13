import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/products";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
import Lessons from "./pages/Lessons";

import Dashboard from "./pages/Dashboard";
import Subscribe from "./pages/Subscribe";
import Wallet from "./pages/Wallet";
import Teacher from "./pages/Teacher";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="content">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
