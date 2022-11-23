import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Solds from "./pages/Solds";

export function Router() {

    return (

        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Clients />} path="/clients" />
            <Route element={<Products />} path="/products" />
            <Route element={<Solds />} path="/solds" />
        </Routes>
    )
}