import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Loading} from '../components/Loading'
import { Div, DivImagemCadastro, Formulario,Input } from "../styles/FormLogin";
import imagemCafe from '../assets/coffee-shop-cafe-latte-cappuccino-newspaper-concept.jpg'
import { useCadastrar } from "../hooks/useCadastrar";


export const Cadastro = () =>{
    
    const [form,onChange,resetForm] = useForm({nome:"",email:"",senha:"",telefone:""});

    const [cadastrar, isLoading, error, sucesso] = useCadastrar()
    

    const navigate = useNavigate();

    const navegarLogin = () =>{
        navigate("/");
    }

    const Cadastro = (event) =>{ 
        event.preventDefault();
        cadastrar(form,resetForm)
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

                {!isLoading && 
                    <>
                        <p onClick={navegarLogin}>Já tenho uma conta</p>
                        <p>{error}</p>
                        <p>{sucesso}</p>
                    </>
                }
                {isLoading && 
                    <Loading></Loading>
                }
            </Formulario>

            <DivImagemCadastro imagem={imagemCafe}></DivImagemCadastro>
        
            
        </Div>
    )
}