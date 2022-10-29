import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

export function Router() {

    return (

        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    )
}