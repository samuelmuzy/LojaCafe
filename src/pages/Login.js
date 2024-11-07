import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Formulario,Div,Input,DivImagem} from "../styles/FormLogin";
import imagem from '../assets/woman-drinking-hot-chocolate-cafe_batcheditor_fotor.jpg'
import axios from 'axios'

export const Login = () =>{
    
    const [form,onChange] = useForm({email:"",senha:""});
    const [error,setError] = useState("");

    const navigate = useNavigate();

    const autenticar = (event) =>{
        event.preventDefault();
        
        axios.post('http://localhost:3003/clientes/login',form)
        .then((response)=>{
            localStorage.setItem("token",response.data.token); //Salva o token no local storage se o body 
            navigate("/produtos");
        })
        .catch((error) => {
            setError(error.response?.data || "Nenhum dado na resposta"); //caso a requisição não for correta 
        });
    }

    const navegarCadastro = () =>{
        navigate("/cadastro");
    }

    return(
        <Div>
            
            <Formulario onSubmit={autenticar}>
                <h1>Acesse sua conta</h1>
                    
                <Input name="email" type="text" value={form.email} onChange={onChange} placeholder="Email"/>
                <Input name="senha" type="password" value={form.senha} onChange={onChange} placeholder="Senha"/>
                
                <Input type="submit" value='Logar'/>
                
                <p onClick={navegarCadastro}>Não tem uma Conta?</p>
                <p>{error}</p>
                
            </Formulario>
            <DivImagem imagem={imagem}></DivImagem>
            
        
        </Div>
    )
}