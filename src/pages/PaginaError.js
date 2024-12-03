import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DivpaginaErro } from "../styles/PaginaErro"

export const PaginaError = () =>{
    return(
        <>
        <Header/>
        <DivpaginaErro>
            <h1>Error 404</h1>
            <h2>Pagina não encontrada</h2>
        </DivpaginaErro>
        <Footer/>
        </>
    )
}