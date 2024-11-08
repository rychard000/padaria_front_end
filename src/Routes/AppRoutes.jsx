import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import PedidosCarrinho from "../components/PedidosCarrinho/PedidosCarrinho";
import Registrar from "../components/Registrar/Registrar";
import Login from "../components/Login/Login";
import UserEdit from '../components/UserEdit/UserEdit'

import PrivateRoute from '../components/Context/PrivateRoute';
import AutenticatesRoutes from "../components/Context/AutenticatesRoutes";
import DetailsProduct from "../components/DetailsProduct/DetailsProduct";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<AutenticatesRoutes><Registrar /></AutenticatesRoutes>} />
                <Route path="/login" element={<AutenticatesRoutes><Login /></AutenticatesRoutes>} />
                <Route path="/edit-user" element={<UserEdit/>}/>
                <Route path="/cart" element={<PrivateRoute><PedidosCarrinho /></PrivateRoute>} />
                <Route path="/details-product/:id" element={<DetailsProduct />} />
            </Routes>
        </BrowserRouter>
    )
}