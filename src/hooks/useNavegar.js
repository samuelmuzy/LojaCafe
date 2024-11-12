import { useNavigate } from "react-router-dom";

export const useNavegar = () => {
    const navigate = useNavigate();

    const NavegarLogin = () => {
        navigate("/");
    };

    const NavegarCadastro = () => {
        navigate("/cadastro");
    };

    const NavegarPerfilUsuario = () => {
        navigate("/perfil");
    };

    const NavegarProdutos = () => {
        navigate("/produtos");
    };

    return {
        NavegarLogin,
        NavegarCadastro,
        NavegarPerfilUsuario,
        NavegarProdutos
    };
};

