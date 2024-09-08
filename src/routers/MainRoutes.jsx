import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Inicio from "../pages/Home";
import UnderDevelopment from "../pages/UnderDevelopment";
import Login from "../pages/Login";
import Registrar from "../pages/Register";
import Shirts from "../pages/Shirts";
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
      <Route path="/moletons" element={<UnderDevelopment />} />
      <Route path="/bermudas" element={<UnderDevelopment />} />
      <Route path="/camisas/:id" element={<Item />} />
      <Route path="/moletons/:id" element={<UnderDevelopment />} />
      <Route path="/bermudas/:id" element={<UnderDevelopment />} />
    </Routes>
  );
};
export default MainRoutes;
