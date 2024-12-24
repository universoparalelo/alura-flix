import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Baseline from "./componentes/Baseline";
import NuevoVideo from "./pages/NuevoVideo";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Baseline /> }>
                    <Route index element={<Home />} />
                    <Route path="nuevo-video" element={<NuevoVideo />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;