import { useState ,useEffect} from "react";
import { useNavegar } from "../hooks/useNavegar";
import { useForm } from "../hooks/useForm";
import { Formulario,Div,Input,DivImagem} from "../styles/FormLogin";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export const Login = () =>{
    
    const [form,onChange] = useForm({email:"",senha:""});
    const [error,setError] = useState("");
    const {NavegarCadastro} = useNavegar();

    const navigate = useNavigate();

    const autenticar = (event) =>{
        event.preventDefault();
        
            axios.post('http://localhost:3003/clientes/login', form)
            .then((response) => {
                localStorage.setItem("token", response.data.token); // Salva o token no local storage
                navigate("/produtos")
            })
            .catch((error) => {
                setError(error.response?.data || "Erro na resposta");
            });
    }
    useEffect(()=>{
        const token = localStorage.getItem("token")
        
        if(token){
            localStorage.removeItem("token");
        }
        
    },[])

    return(
        <Div>
            
            <Formulario onSubmit={autenticar}>
                <h1>Acesse sua conta</h1>
                    
                <Input name="email" type="text" value={form.email} onChange={onChange} placeholder="Email"/>
                <Input name="senha" type="password" value={form.senha} onChange={onChange} placeholder="Senha"/>
                
                <Input type="submit" value='Logar'/>
                
                <p onClick={NavegarCadastro}>Não tem uma Conta?</p>
                <p>{error}</p>
                
            </Formulario>
            <DivImagem></DivImagem>
            
        
        </Div>
    )
}