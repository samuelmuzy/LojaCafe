import { ButtonConta, DivSemConta, ImagemConta } from "../styles/CardDeUsuarios"
import imagemConta from '../assets/botao-redondo-da-conta-com-o-usuario-dentro.png'
import { Navigate } from "react-router-dom"
export const CrieUmaConta = () =>{
    const navegarLogin = () =>{
        Navigate("/login")
    }
    return(
        <DivSemConta>
            <ImagemConta src={imagemConta} alt="Fazer Conta"/>
            <h2>Logue em uma conta</h2>
            <ButtonConta onClick={navegarLogin}>Logar</ButtonConta>
        </DivSemConta>
    )
}