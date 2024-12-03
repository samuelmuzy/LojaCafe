import { useNavigate } from "react-router-dom";

export const useNavegar = () => {
    const navigate = useNavigate();

    const NavegarPrincipal = () =>{
        navigate("/");
    }

    const NavegarLogin = () => {
        navigate("/login");
    };

    const NavegarCadastro = () => {
        navigate("/cadastro");
    };

    const NavegarPerfilUsuario = () => {
        navigate("/perfil");
    };

    const NavegarBebidas = () =>{
        navigate("/bebidas");
    }

    const NavegarCarrinho = () =>{
        navigate('/carrinho');
    }

    return {
        NavegarLogin,
        NavegarCarrinho,
        NavegarCadastro,
        NavegarPerfilUsuario,
        NavegarPrincipal,
        NavegarBebidas
    };
};

