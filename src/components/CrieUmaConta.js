import { ButtonConta, DivSemConta, ImagemConta } from "../styles/CardDeUsuarios"
import imagemConta from '../assets/botao-redondo-da-conta-com-o-usuario-dentro.png'
import { useNavegar } from "../hooks/useNavegar"
export const CrieUmaConta = () =>{
    const {NavegarLogin} = useNavegar()
    return(
        <DivSemConta>
            <ImagemConta src={imagemConta} alt="Fazer Conta"/>
            <h2>Logue em uma conta</h2>
            <ButtonConta onClick={NavegarLogin}>Logar</ButtonConta>
        </DivSemConta>
    )
}