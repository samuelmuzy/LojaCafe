import { useProdutos } from "../hooks/useProdutos"
import {React, useEffect, useState} from 'react'
import { Loading } from "../components/Loading"
import {buscarProdutos} from '../service/VerificarProdutos'
import { useProtectedPage } from "../hooks/useVerificarToken";
import { ModalExcluir } from "../components/ModalExcluir";
import { ModalAlterar } from "../components/ModalAlterar";
import { useNavegar } from "../hooks/useNavegar";
import { useGetToken } from "../hooks/useGetToken";
import { useForm } from "../hooks/useForm";
import { DivButtons } from "../styles/Modal";
import { ButtonAlterar, DivUsuarios } from "../styles/Usuarios";
import { Header } from "../components/Header";
import { CardDeUsuario } from "../components/CardDeUsuarios";

export const Produtos = () =>{

    const [form, onChange, resetForm] = useForm({nome: ""});
    
    const [protutos,setProdutos,isLoading,error] = useProdutos(`http://localhost:3003/clientes/buscar?nome=${form.nome}`);
    
    const [modalExcluir,setModalExcluir] = useState(false);
    const [modalAlterar,setModalAlterar] = useState(false);
    const [idModal,setIdModal] = useState("");

    const [id,role] = useGetToken();


    const abrirModalExcluir = (id) =>{
        setModalExcluir(true);
        setIdModal(id);
    }

    const fecharModalExcluir = () =>{
        setModalExcluir(false);
        setIdModal("");
    }

    const abrirModalAlterar = (id) =>{
        setModalAlterar(true);
        setIdModal(id);
    }

    const fecharModalAlterar = () =>{
        setModalAlterar(false);
        setIdModal("");
    }

    useEffect(() => {
        if (!modalAlterar || modalExcluir) {
            buscarProdutos(setProdutos); // Atualiza os produtos quando o modal de alterar é fechado
        }
    }, [modalAlterar,modalExcluir]);
    


    const listar = protutos.map((prod)=>{
        return(
            <>
                <CardDeUsuario 
                    id={prod.dfid_cliente} role={prod.dfuser_role}
                    nome={prod.dfnome_cliente} 
                    email={prod.dfemail_cliente} 
                    telefone={prod.dftelefone_cliente}  
                    abrirModalAlterar={() => abrirModalAlterar(prod.dfid_cliente)} 
                    abrirModalExcluir={() => abrirModalExcluir(prod.dfid_cliente)}
                />
            </>
          
        )
    })
    
    useProtectedPage(); //Verifica quando o token e expirado e redireciona a pagina de login 

    return(
        <>
            <Header></Header>
            {role === "ADMIN" &&
                <>
                    
                    <input placeholder="Digite um nome" type="search" onChange={onChange} name="nome" value={form.nome}></input>

                    {isLoading &&  
                        <Loading/>
                    }
                    
                    {!isLoading && error && <p>{error}</p>}
                    
                    {!isLoading && protutos && !error &&
                        listar
                    }

                
                    <ModalAlterar onClickFecharModal={fecharModalAlterar} modalEstado={modalAlterar} id={idModal} />
                    <ModalExcluir onClickFecharModal={fecharModalExcluir} modalEstado={modalExcluir} id={idModal}/>
                </>
            }
        </>
    )    
}