import { useEffect } from "react"
import { Header } from "../components/Header"
import axios from "axios"
import { useProdutos } from "../hooks/useProdutos"
import { Loading } from "../components/Loading"

export const Bebidas = () =>{
    const [bebidas,setBebidas,isLoading,error] = useProdutos("http://localhost:3003/bebidas");

    const listarBebidas = bebidas.map((beb)=>{
        return(
            <div>
                <p>{beb.dfnome_bebida}</p>
                <p>{beb.dfdescricao_bebida}</p>
                <p>{beb.dfbebida_disponivel}</p>
                <p>{beb.dfpreco}</p>
            </div>
        )
    })
    return(
        <>
            <Header></Header>
            {isLoading &&  <Loading/>}
                    
            {!isLoading && error && <p>{error}</p>}
                    
            {!isLoading && bebidas && !error &&
                listarBebidas
            }
        
        </>
    )
}