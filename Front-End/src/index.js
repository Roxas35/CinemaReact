import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connexion } from "../Components/Connexion";
import { Detail } from "../Components/Detail";
import { Favori } from "../Components/Favori";
import { Home } from "../Components/Home";
import { Inscription } from "../Components/Inscription";


const root = document.getElementById('root')
const app = createRoot(root)

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path=':id' element={<Detail />} />
            <Route path='/Connexion' element={<Connexion />} />
            <Route path='/Inscription' element={<Inscription />} />
            <Route path='/Favori' element={<Favori />} />
        </Routes>
    </BrowserRouter>
    )
}



app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)