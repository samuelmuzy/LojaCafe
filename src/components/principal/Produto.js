import axios from "axios"
import { useEffect, useState } from "react"
import { ButtonBebidas, DivBebidas, DivCard, DivInputNumerico, ImgBebidas } from "../../styles/Bebidas"
import { adicionarCarrinhoService, procurarPedidoService } from "../../service/AdicionarBebidasCarrinho"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS necessário

import { useGetToken } from "../../hooks/useGetToken"
import { InputNumerico } from "../Inputs/InputNumerico";
import { DivBebidasCards } from "../../styles/Principal"
import { ApiUrl } from "../../const/apiUrl"

export const Produto = () =>{
    const [produtos,setProdutos] = useState([])
    
    const token = localStorage.getItem("token");
    
    const [id, role] = useGetToken();
    const [carrinho, setCarrinho] = useState(true);
    const [idPedido, setIdPedido] = useState("");
    const [numero, setNumero] = useState(1);

    

    const procurarPedido = async () => {
        try {
            const pedido = await procurarPedidoService(id, token);
            setIdPedido(pedido.idPedido);
            setCarrinho(false);
        } catch (error) {
            console.error("Erro ao buscar pedido:", error);
        }
    };

    useEffect(() => {
        if (id) {
            procurarPedido();
        }
    }, [id]);

    const adicionarCarrinho = async (idBebida, valor) => {
        try {
            const response = await adicionarCarrinhoService(id, idBebida, valor, numero, carrinho, idPedido);
            if (carrinho) {
                setIdPedido(response.data.idPedido);
                setCarrinho(false);
            }
            toast.success(`Dados recebidos: ${response.data.message}`, {
                position: "top-left"
            });
        } catch (error) {
            toast.error(`Erro: ${error.response.data}`, {
                position: "top-left"
            })
        }
    };
    
    const exibirProdutos = async () => {
        try {
            const response = await axios.get(`${ApiUrl}/bebidas`, {
                params: { limit: 3 }
            });
            setProdutos(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erro no Axios:', error.response?.data || error.message);
        }
    };
    

    useEffect(()=>{
        exibirProdutos()
    },[])

    const listarBebidas = produtos.map((beb) => {
        return (
            <DivCard key={beb.dfid_bebida}>
                <ImgBebidas src={`${ApiUrl}${beb.dfcaminho_imagem}`} alt="imagemBebida" />
                <h3>{beb.dfnome_bebida}</h3>
                <p>{beb.bebidaDisponivel}</p>
                
                <DivInputNumerico>
                    <h3>{`R$ ${beb.dfpreco}`}</h3>
                    <InputNumerico numero={setNumero} />
                </DivInputNumerico>
                
                <ButtonBebidas onClick={() => adicionarCarrinho(beb.dfid_bebida, beb.dfpreco)}>Adicionar ao Carrinho</ButtonBebidas>
        </DivCard>


        );
    });
    
    return(
        <>
            <DivBebidasCards>
                    {listarBebidas}
            </DivBebidasCards>
            <ToastContainer/>
        </>
    )
}