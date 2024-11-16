import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { Cadastro } from "./pages/Cadastro";
import { PaginaError } from './pages/PaginaError';
import { PerfilUsuario } from "./pages/PerfilUsuario";
import { Bebidas } from "./pages/Bebidas";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/bebidas" element={<Bebidas/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/perfil" element={<PerfilUsuario/>}/>  
                <Route path="*" element={<PaginaError/>}/>      
            </Routes>
        </BrowserRouter>
    )
}