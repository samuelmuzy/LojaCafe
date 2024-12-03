import { ButtonBebidas, DivCard, DivInputNumerico, ImgBebidas, ImgLixeira } from "../../styles/Bebidas";
import imagemLixeira from '../../assets/excluir.png';
import Button from '../buttons/Button';
import { useGetToken } from "../../hooks/useGetToken";
import { InputNumerico } from '../Inputs/InputNumerico';

export const CardBebidas = (props) => {
    const { nomeBebida, idBebida, bebidaDisponivel, preco, setNumero, caminhoImagem, carrinho, abrirModalAlterar, abrirModalExcluir } = props;
    const [id, role] = useGetToken();

    // Renderizar os botões de administração, se o papel for "ADMIN"
    const renderizarButtonsAdmin = () => (
        <DivInputNumerico>
            <Button click={() => abrirModalAlterar(idBebida)} />
            <ImgLixeira onClick={() => abrirModalExcluir(idBebida)} src={imagemLixeira} alt="Lixeira" />
        </DivInputNumerico>
    );

    // Verifica se o card deve ser exibido para o usuário atual
    const verificarEstadoCart = () => {
        if (role !== "ADMIN" && bebidaDisponivel === 1) return true;
        if (role === "ADMIN") return true;
        return false;
    };

    // Renderiza o card
    return (
        <>
            {verificarEstadoCart() && (
                <DivCard key={idBebida}>
                    {role === "ADMIN" && renderizarButtonsAdmin()}

                    <ImgBebidas src={`http://localhost:3003${caminhoImagem}`} alt="imagemBebida" />
                    <h3>{nomeBebida}</h3>

                    {role === "ADMIN" && <p>{bebidaDisponivel ? "Disponível" : "Indisponível"}</p>}

                    <DivInputNumerico>
                        <h3>{`R$ ${preco}`}</h3>
                        <InputNumerico numero={setNumero} />
                    </DivInputNumerico>

                    <ButtonBebidas onClick={carrinho}>Adicionar ao Carrinho</ButtonBebidas>
                
                </DivCard>
            )}
        </>
    );
};
