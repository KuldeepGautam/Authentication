import React from "react";
import LoginForm from "./components/loginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Logs from "./components/logs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </Router>
  );
};

export default App;
