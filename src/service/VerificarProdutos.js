import axios from "axios";
import { ApiUrl } from "../const/apiUrl";

export const buscarProdutos = async (setData) => {
    try {
        const response = await axios.get(`${ApiUrl}/bebidas`);
        setData(response.data); // Atualiza os produtos
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}




