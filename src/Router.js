import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { Cadastro } from "./pages/Cadastro";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/produtos" element={<Produtos/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>        
            </Routes>
        </BrowserRouter>
    )
}