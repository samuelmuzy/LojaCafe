import { useEffect} from "react";
import {Div,DivImagem} from "../styles/FormLogin";
import { FormLogin } from "../components/FomLogin";


export const Login = () =>{
    

    useEffect(()=>{
        const token = localStorage.getItem("token")
        
        if(token){
            localStorage.removeItem("token");
        }
        
    },[])

    return(
        <Div>
            <FormLogin></FormLogin>
            <DivImagem></DivImagem>
        </Div>
    )
}