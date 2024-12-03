import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useForm } from '../../hooks/useForm';
import { useEffect, useState } from 'react';
import { useProdutos } from '../../hooks/useProdutos';
import { useGetToken } from '../../hooks/useGetToken';
import { buscarProdutos } from '../../service/VerificarProdutos';
import { adicionarCarrinhoService, procurarPedidoService } from '../../service/AdicionarBebidasCarrinho'
import { CardBebidas } from './CardBebidas';
import { DivBebidas, DivInputPesquisa, InputPesquisa } from '../../styles/Bebidas';
import { ModalAlterar } from '../Modal/ModalAlterar';
import {ModalExcluir } from '../Modal/ModalExcluir'
import { Loading } from '../Loading'
import {Upload} from '../formularios/Upload'
import { Paginacao } from './Paginacao';
import { useModal } from '../../hooks/useModal';
import ButtonAdd from '../buttons/ButtonAdd';

export const BebidasPrincipal = () =>{
    const [form, onChange, resetForm] = useForm({ nomeBebida: "" });
    const [currentPage, setCurrentPage] = useState(0);
    const [limit,setLimit] = useState(2);
    const { modais, idModal, toggleModal } = useModal(); 

   
    const [bebidas, setBebidas, isLoading, error] = useProdutos(`http://localhost:3003/bebidas?nomeBebida=${form.nomeBebida}`);
    
    const page = Math.ceil(bebidas.length / limit);
    const startIndex = currentPage * limit
    const endIndex = startIndex + limit;
    const curretItens = bebidas.slice(startIndex,endIndex)

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

    useEffect(()=>{
        if(!modais.alterar){
            buscarProdutos(setBebidas);
        }
    },[modais])

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

    const listarBebidas = curretItens.map((beb) => {
        return (
            <CardBebidas
                nomeBebida={beb.dfnome_bebida}
                idBebida={beb.dfid_bebida}
                bebidaDisponivel={beb.dfbebida_disponivel}
                preco={beb.dfpreco}
                setNumero={setNumero}
                caminhoImagem={beb.dfcaminho_imagem}
                carrinho={() => adicionarCarrinho(beb.dfid_bebida, beb.dfpreco)}
                abrirModalAlterar={() => toggleModal("alterar", beb.dfid_bebida)}
                abrirModalExcluir={() => toggleModal("excluir", beb.dfid_bebida)}
            />
        );
    });

    return (
        <>
            <ToastContainer/>
            <DivInputPesquisa>
                <InputPesquisa placeholder="Pesquisar Bebidas" type="search" name="nomeBebida" value={form.nomeBebida} onChange={onChange} />
            
                {role === "ADMIN" &&
                    <ButtonAdd click={() => toggleModal("adicionar")}>Adicionar Bebida</ButtonAdd>
                }
            </DivInputPesquisa>

            {isLoading && <Loading />}

            {!isLoading && error && <p>{error}</p>}

            {!isLoading && bebidas && !error && (
                <DivBebidas>
                    {listarBebidas}
                </DivBebidas>
            )}
            <Paginacao currentPage={currentPage} page={page} setCurrentPage={setCurrentPage} />

            {role === "ADMIN" &&
                <Upload  onClickFecharModal={() => toggleModal("adicionar")} modalEstado={modais.adicionar} />
            }

            <ModalAlterar
                onClickFecharModal={() => toggleModal("alterar")}
                modalEstado={modais.alterar}
                id={idModal}
            />

            <ModalExcluir
                onClickFecharModal={() => toggleModal("excluir")}
                modalEstado={modais.excluir}
                setBebidas={setBebidas}
                id={idModal}
            />
        </>
    );
}