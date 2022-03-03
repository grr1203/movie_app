import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
