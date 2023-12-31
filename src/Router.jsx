import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import StickyNotes from "./StickyNotes";
import ErrorPage from "./ErrorPage";
import ToDo from "./Todo"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sticky" element={<StickyNotes />} />
                <Route path="todo" element={<ToDo/>} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}


