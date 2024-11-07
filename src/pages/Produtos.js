import { useProdutos } from "../hooks/useProdutos"
import {React, useState} from 'react'
import { Loading } from "../components/Loading"
import { useProtectedPage } from "../hooks/useVerificarToken";
import { ModalExcluir } from "../components/ModalExcluir";

export const Produtos = () =>{
    
    const [protutos,setData,isLoading,error] = useProdutos('http://localhost:3003/clientes');
    
    const [abrirModal,setAbrirModal] = useState(false);
    const [idModal,setIdModal] = useState("");

    const abrir = (id) =>{
        setAbrirModal(true);
        setIdModal(id);
    }

    const fecharModal = () =>{
        setAbrirModal(false);
        setIdModal("");
    }

    const removerItem = () =>{
        setData(
            protutos.filter((prod) => 
                { 
                    return prod.dfid_cliente !== idModal 
                })
        ) 
            /*altera o array produtos para que possa se remover o Cliente sem atualizar a pagina*/
    }

    const listar = protutos.map((prod)=>{
        return(
            <div key={prod.dfid_cliente}>
                <p>{prod.dfnome_cliente}</p>
                <p>{prod.dfemail_cliente}</p>
                <p>{prod.dftelefone_cliente}</p>
                <button onClick={() => abrir(prod.dfid_cliente)}>Deletar</button>
            </div>
        )
    })
    
    useProtectedPage(); //Verifica quando o token e expirado e redireciona a pagina de login 

    return(
        <>
            {isLoading &&  
                <Loading/>
            }
            
            {!isLoading && error && <p>{error}</p>}
            
            {!isLoading && protutos && 
                listar
            }
            
            <ModalExcluir deletar={() => removerItem()} onClickFecharModal={fecharModal} modalEstado={abrirModal} id={idModal} />
        </>
    )    
}