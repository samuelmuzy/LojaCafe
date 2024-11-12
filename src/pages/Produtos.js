import { useProdutos } from "../hooks/useProdutos"
import {React, useEffect, useState} from 'react'
import { Loading } from "../components/Loading"
import {buscarProdutos} from '../service/VerificarProdutos'
import { useProtectedPage } from "../hooks/useVerificarToken";
import { ModalExcluir } from "../components/ModalExcluir";
import { ModalAlterar } from "../components/ModalAlterar";
import { useNavigate } from "react-router-dom";
import { useGetToken } from "../hooks/useGetToken";

export const Produtos = () =>{
    
    const [protutos,setProdutos,isLoading,error] = useProdutos('http://localhost:3003/clientes');
    
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
            <div key={prod.dfid_cliente}>
                <p>{prod.dfnome_cliente}</p>
                <p>{prod.dfemail_cliente}</p>
                <p>{prod.dftelefone_cliente}</p>
                <p>{prod.dfuser_role}</p>
                {role === "ADMIN" &&
                    <>
                        <button onClick={() => abrirModalExcluir(prod.dfid_cliente)}>Deletar</button>
                        <button onClick={() => abrirModalAlterar(prod.dfid_cliente)}>Alterar</button>
                    </>
                }
            </div>
        )
    })
    
    useProtectedPage(); //Verifica quando o token e expirado e redireciona a pagina de login 

    const navigate = useNavigate()

    const navegarPerfil = () =>{
        navigate("/perfil")
    }
    return(
        <>
            {isLoading &&  
                <Loading/>
            }
            
            {!isLoading && error && <p>{error}</p>}
            
            {!isLoading && protutos && 
                listar
            }

            <button onClick={navegarPerfil}>Perfil</button>
            <ModalAlterar onClickFecharModal={fecharModalAlterar} modalEstado={modalAlterar} id={idModal} />
            <ModalExcluir onClickFecharModal={fecharModalExcluir} modalEstado={modalExcluir} id={idModal}/>
        </>
    )    
}