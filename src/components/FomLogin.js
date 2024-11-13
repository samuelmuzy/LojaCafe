import { useState } from "react";
import { useNavegar } from "../hooks/useNavegar";
import { useForm } from "../hooks/useForm";
import { InputFormulario } from "./InputFormulario";
import axios from 'axios'
import { Input,Formulario } from "../styles/FormLogin";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const FormLogin = () =>{

    const [form,onChange] = useForm({email:"",senha:""});
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const {NavegarCadastro} = useNavegar();

    const navigate = useNavigate();
    
    const autenticar = (event) =>{
        event.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:3003/clientes/login', form)
            .then((response) => {
                localStorage.setItem("token", response.data.token); // Salva o token no local storage
                navigate("/produtos")
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.response?.data || "Erro na resposta");
                setIsLoading(false);
            });
    }

    return(
        <Formulario onSubmit={autenticar}>
                <h1>Acesse sua conta</h1>
               
                <InputFormulario name={"email"} texto={"Email"} type={"text"} value={form.email} onChange={onChange}/>
                <InputFormulario name={"senha"} texto={"Senha"} type={"password"} value={form.senha} onChange={onChange}/>
               
                
                <Input type="submit" value='Logar'/>

                {!isLoading && (
                    <>
                         <p onClick={NavegarCadastro}>Não tem uma Conta?</p>
                         <p>{error}</p>
                    </>
                )}
                {isLoading && <Loading/>}
                
        </Formulario>
    )
}