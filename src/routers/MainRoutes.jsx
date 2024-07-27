import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Inicio from "../pages/Home";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
export default MainRoutes;