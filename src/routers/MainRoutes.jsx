import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import UnderDevelopment from "../pages/UnderDevelopment";
import Inicio from "../pages/Home";
import Login from "../pages/Login";
import Registrar from "../pages/Register";
import Shirts from "../pages/Shirts";
import Shorts from "../pages/Shorts";
import Hoodies from "../pages/Hoodies";
import Item from "../components/item";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registrar />} />
      <Route path="/camisas" element={<Shirts />} />
      <Route path="/moletons" element={<Hoodies />} />
      <Route path="/bermudas" element={<Shorts />} />
      <Route path="/camisas/:id" element={<Item />} />
      <Route path="/moletons/:id" element={<Item />} />
      <Route path="/bermudas/:id" element={<Item />} />
      <Route path="/ofertas/:id" element={<Item />} />
    </Routes>
  );
};
export default MainRoutes;
