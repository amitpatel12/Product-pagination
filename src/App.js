import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product.js";
import Details from "./components/Details";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  )
}
