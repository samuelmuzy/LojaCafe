import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { PaginaError } from './pages/PaginaError';
import { PerfilUsuario } from "./pages/PerfilUsuario";
import {Carrinho} from './pages/Carrinho';
import { Bebidas } from "./pages/Bebidas";
import { Principal } from "./pages/Principal";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/bebidas" element={<Bebidas/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/perfil" element={<PerfilUsuario/>}/>  
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<PaginaError/>}/>      
            </Routes>
        </BrowserRouter>
    )
}