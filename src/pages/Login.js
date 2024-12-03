import { useEffect} from "react";
import {Div,DivImagem} from "../styles/FormLogin";
import { FormLogin } from "../components/formularios/FomLogin";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Login = () =>{
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        
        if(token){
            localStorage.removeItem("token");
        }
        
    },[])

    return(
        <>
            <Header></Header>
            <Div>
                <FormLogin></FormLogin>
                <DivImagem></DivImagem>
            </Div>
            <Footer/>
        </>
    )
}