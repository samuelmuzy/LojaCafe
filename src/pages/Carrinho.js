import { useContext, useEffect, useState } from "react";
import { useGetToken } from "../hooks/useGetToken";
import axios from "axios";
import { Header } from "../components/Header";
import { ToastContainer, toast } from 'react-toastify';
import { CarrinhoCompras } from "../components/carrinhoCompras/CarrinhoCompras";
import { CarrinhoVazio } from "../components/carrinhoCompras/CarrinhoVazio";

export const Carrinho = () => {
    const [carrinho, setCarrinho] = useState(false);
   

    const token = localStorage.getItem("token")
    const [controle,setControle] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [id, role] = useGetToken();

    // Função para buscar os pedidos
    const procurarPedido = () => {
        axios.get(`http://localhost:3003/pedidos/buscarpedido/${id}`,{
            headers:{
                Authorization:token
            }
        })
            .then((response) => {
                setPedido(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    const deletarBebida = (idbebida,idPedido) =>{
        axios.delete(`http://localhost:3003/pedidos/deletarbebida/${idPedido}/${idbebida}`,{
            headers:{
                Authorization:token
            }
        })
        .then((response)=>{
            console.log(response.data);
            setControle(preState => !preState);
            toast.success(`Dados recebidos: ${JSON.stringify(response.data)}`, {
                position: "top-left"
            });
        })
        .catch((error)=>{
            console.log(error.response.data)
            setControle(preState => !preState);
        })
    }

    useEffect(() => {
        if (id) {
            procurarPedido();
        }
    }, [id,controle]);

    
    const produtosQuantidades = pedido.flatMap(ped => 
        ped.bebidas
            .filter(bebida => bebida.quantity && bebida.valorTotal) // Filtra se quantity e valorTotal são válidos
            .map(bebida => ({
                productId: bebida.productId,
                quantity: bebida.quantity,
                valorTotal: bebida.valorTotal,
            }))
    );
    

    return (
        <div>
            <Header />
            <ToastContainer />

            {!id && <p>Faça uma conta</p>}
            
            {produtosQuantidades.length === 0 ? id && (
                <CarrinhoVazio/>
            ) : (
                pedido.map((ped) => (
                    <CarrinhoCompras key={ped.idPedido} pedido={ped} deletarBebida={deletarBebida} />
                ))
            )}
        </div>
    );
};
