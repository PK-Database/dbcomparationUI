import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QueryPage from "./pages/queryPage/QueryPage";
import MainPage from "./pages/mainPage/MainPage";

export default function App() {
    return (
    <div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/query" element={<QueryPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}