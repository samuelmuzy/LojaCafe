import { useProdutos } from "../hooks/useProdutos"
import {React} from 'react'

import { Loading } from "../components/Loading"
import axios from "axios";
import { useProtectedPage } from "../hooks/useVerificarToken";

export const Produtos = () =>{
    
    const [protutos,setData,isLoading,error] = useProdutos('http://localhost:3003/clientes');

    const token = localStorage.getItem("token");

    const deletarUsuario = (id) =>{
        axios.delete(`http://localhost:3003/clientes/${id}`,{
            headers:{
                Authorization:token
            }
        })
        .then((response)=>{
            console.log(response.data);
            removerItem(id);
        })
        .catch((error)=>{
            console.log(error.response.data);
        })
    }
    

    const removerItem = (id) =>{
        setData(
            protutos.filter((prod) => 
                { 
                    return prod.dfid_cliente !== id 
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
                <button onClick={() => deletarUsuario(prod.dfid_cliente)}>Deletar</button>
            </div>
        )
    })
    useProtectedPage();
    return(
        <>
            {isLoading &&  
                <Loading/>
            }
            
            {!isLoading && error && <p>{error}</p>}
            
            {!isLoading && protutos &&
                listar
            }
            

        </>
    )    
}