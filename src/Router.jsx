import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}


