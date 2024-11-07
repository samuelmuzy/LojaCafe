import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Div, DivImagemCadastro, Formulario,Input } from "../styles/FormLogin";
import imagemCafe from '../assets/coffee-shop-cafe-latte-cappuccino-newspaper-concept.jpg'


export const Cadastro = () =>{
    
    const [form,onChange,resetForm] = useForm({nome:"",email:"",senha:"",telefone:""});

    const [erro,setError] = useState("");
    const [sucesso,setSucesso] = useState("");
    

    const navigate = useNavigate();

    const navegarLogin = () =>{
        navigate("/");
    }

    const Cadastro = (event) =>{ 
        event.preventDefault();
        
        axios.post("http://localhost:3003/clientes",form)
        .then((response)=>{
            setSucesso(response.data)
            setError("");
            resetForm()
        })
        .catch((error)=>{
            setError(error.response?.data || "Nenhum dado na resposta");
        })
        
    }

    return(
        <Div>
        
            <Formulario onSubmit={Cadastro}>
                <h1>Cadastro</h1>
                <Input value={form.nome} type="text" onChange={onChange} name="nome" placeholder="Nome"/>
                <Input value={form.email} type="email" onChange={onChange} name="email" placeholder="email"/>
                <Input value={form.senha} onChange={onChange} name="senha" placeholder="senha"/>
                <Input value={form.telefone} onChange={onChange} name="telefone" placeholder="telefone"/>
                <Input type="submit" value='Cadastrace'/>

                <p onClick={navegarLogin}>Já tenho uma conta</p>
                <p>{erro}</p>
                <p>{sucesso}</p>
            </Formulario>

            <DivImagemCadastro imagem={imagemCafe}></DivImagemCadastro>
        
            
        </Div>
    )
}