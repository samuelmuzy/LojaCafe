import { ButtonConta, DivSemConta, ImagemConta, SubtituloCTA, TituloCTA, BotoesCTA } from "../styles/CardDeUsuarios"
import imagemConta from '../assets/coffee cup-cuate.png'
import { useNavegar } from "../hooks/useNavegar"

export const CrieUmaConta = () =>{
    const {NavegarLogin, NavegarCadastro} = useNavegar()
    return(
        <DivSemConta>
            <ImagemConta src={imagemConta} alt="Crie sua conta"/>
            <TituloCTA>Crie sua conta</TituloCTA>
            <SubtituloCTA>Salve seus pedidos, acompanhe o carrinho e aproveite ofertas exclusivas.</SubtituloCTA>
            <BotoesCTA>
                <ButtonConta onClick={NavegarCadastro}>Cadastrar</ButtonConta>
                <ButtonConta onClick={NavegarLogin}>Entrar</ButtonConta>
            </BotoesCTA>
        </DivSemConta>
    )
}