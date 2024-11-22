import { Nav,A,HeaderDiv,ImgCarrinho,LogoHeader,ButtonHeader } from "../styles/Header"
import sacola from '../assets/sacolas-de-compras.png'
import logo from '../assets/leonardoLogo.png'
import { useNavegar } from "../hooks/useNavegar"
import { useGetToken } from "../hooks/useGetToken"

export const Header = () =>{
    const {NavegarLogin,NavegarCadastro,NavegarProdutos,NavegarPerfilUsuario,NavegarBebidas} = useNavegar();
    const [id,role] = useGetToken();
    
    
    return(
        <HeaderDiv>
            <LogoHeader src={logo} alt="logo"/>
            <Nav>
                <A>Principal</A>
                <A onClick={NavegarBebidas}>Bebidas</A>
                {role === "ADMIN" &&
                    <A onClick={NavegarProdutos}>Usuários</A>
                }
                <A onClick={NavegarPerfilUsuario}>Perfil</A>
            </Nav>
            <Nav>
                {!role && 
                    <ButtonHeader onClick={NavegarLogin}>Logar</ButtonHeader>
                }  
                
                <ImgCarrinho src={sacola} alt="Carrinho de compras"/>
            </Nav>
            
        </HeaderDiv>
    )
}