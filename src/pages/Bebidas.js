import { useEffect } from "react"
import { Header } from "../components/Header"
import axios from "axios"
import { useProdutos } from "../hooks/useProdutos"
import { Loading } from "../components/Loading"
import { DivBebidas, DivCard, ImgBebidas } from "../styles/Bebidas"
import { Upload } from "../components/Upload"


export const Bebidas = () =>{
    const [bebidas,setBebidas,isLoading,error] = useProdutos("http://localhost:3003/bebidas");

    const listarBebidas = bebidas.map((beb)=>{
        return(
            <DivCard>
                <ImgBebidas src={`http://localhost:3003${beb.dfcaminho_imagem}`} alt="imagemBebida"/>
                <p>{beb.dfnome_bebida}</p>
                <p>{beb.dfdescricao_bebida}</p>
                <p>{beb.dfbebida_disponivel}</p>
                <p>{beb.dfpreco}</p>
            </DivCard>
        )
    })
    return(
        <>
            <Header></Header>
        
            {isLoading &&  <Loading/>}
                    
            {!isLoading && error && <p>{error}</p>}
                    
            {!isLoading && bebidas && !error &&
                <DivBebidas>
                    {listarBebidas}

                </DivBebidas>
            }
           
        </>
    )
}