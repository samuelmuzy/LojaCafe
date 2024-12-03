import axios from "axios";

export const adicionarCarrinhoService = async (idCliente, idBebida, valor,quantidade, carrinho, idPedido) => {
    const token = localStorage.getItem("token");
    if (carrinho) {
        const body = {
            idCliente,
            valorPedido: valor,
            formaPagamento: "cartão",
            bebidas: [{ quantity: quantidade, productId: idBebida }],
        };
        const dataP = await axios.post("http://localhost:3003/pedidos/cadastro", body,{
            headers:{
                Authorization:token
            }
        });
        return dataP
    } else {
        const body = {
            idPedido,
            bebidas: [{ quantity: quantidade, productId: idBebida }],
        };
        const dataB = await axios.post("http://localhost:3003/pedidos/cadastrar/NovaBebida", body,{
            headers:{
                Authorization:token
            }
        });
        return dataB;
    }
};

export const procurarPedidoService = async (id, token) => {
    try {
        const response = await axios.get(`http://localhost:3003/pedidos/buscarpedido/${id}`, {
            headers: {
                Authorization: token,
            },
        });
        return response.data[0]; // Retorna apenas o primeiro pedido.
    } catch (error) {
        throw error.response?.data || error; // Lança o erro para ser tratado pelo chamador.
    }
};