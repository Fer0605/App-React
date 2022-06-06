import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Calculadora from "./Components/calculadora";
import Grados from "./Components/grados";
import Formulario from "./Components/formulario";
export function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Activities Menu</h1>
                <Menu></Menu>
                <Routes>
                    <Route path="/calculadora" element={<Calculadora />} />
                    <Route path="/grados" element={<Grados />} />
                    <Route path="/formulario" element={<Formulario />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}