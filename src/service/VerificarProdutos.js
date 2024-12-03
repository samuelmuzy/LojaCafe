import axios from "axios";

export const buscarProdutos = async (setData) => {
    try {
        const response = await axios.get(`http://localhost:3003/bebidas`);
        setData(response.data); // Atualiza os produtos
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}




