import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";

export function Router() {

    return (

        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Clients />} path="/clients" />
        </Routes>
    )
}