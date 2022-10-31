import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";

export function Router() {

    return (

        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Clients />} path="/clients" />
            <Route element={<Products />} path="/products" />
        </Routes>
    )
}