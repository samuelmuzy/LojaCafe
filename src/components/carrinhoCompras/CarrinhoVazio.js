import imagemCarrinho from '../../assets/carrinho.png'
import { useNavegar } from '../../hooks/useNavegar'
import { ButtonVazio, DivCarrinhoVazio, ImagemCarrinhoVazio } from '../../styles/Carrinho';
export const CarrinhoVazio = () =>{
    const {NavegarBebidas} = useNavegar();
    return(
        <DivCarrinhoVazio>
            <h1>Carrinho Vazio</h1>
            <ImagemCarrinhoVazio src={imagemCarrinho} alt="carrinho vazio"/>
            <ButtonVazio onClick={NavegarBebidas}>Adicionar produtos</ButtonVazio>
        </DivCarrinhoVazio>
    )
}