import "./App.css";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import ShoppingCard from "./components/ShoppingCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShoppingCard x="10" />} />
        <Route
          path="*"
          element={
            <div
              style={{ height: "100vh" }}
              className="d-flex align-items-center justify-content-center"
            >
              <h2> 404 Page not Found! </h2>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
