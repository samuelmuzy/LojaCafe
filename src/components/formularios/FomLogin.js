import { useState } from "react";
import { useNavegar } from "../../hooks/useNavegar";
import { useForm } from "../../hooks/useForm";
import axios from 'axios'
import { Formulario,P, TituloForm } from "../../styles/FormLogin";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";
import { ButtonForm } from "../buttons/ButtonForm";
import { InputFormulario } from "../Inputs/InputFormulario";

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
                navigate("/bebidas")
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.response?.data || "Erro na resposta");
                setIsLoading(false);
            });
    }

    return(
        <Formulario onSubmit={autenticar}>
                <TituloForm>Acesse sua conta</TituloForm>

                <InputFormulario name={"email"} texto={"Email"} type={"text"} value={form.email} onChange={onChange}/>
                <InputFormulario name={"senha"} texto={"Senha"} type={"password"} value={form.senha} onChange={onChange}/>

                <ButtonForm texto={"Logar"}/>

                {!isLoading && (
                    <>
                        <P onClick={NavegarCadastro}>Não tem uma Conta?</P>
                        <p>{error}</p>
                    </>
                )}
                {isLoading && <Loading/>}
                
        </Formulario>
    )
}