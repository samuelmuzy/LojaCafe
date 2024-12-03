import { Nav,A,HeaderDiv,ImgCarrinho,LogoHeader,ButtonHeader } from "../styles/Header"
import sacola from '../assets/carrinho-de-compras (2).png'
import logo from '../assets/leonardoLogo.png'
import { useNavegar } from "../hooks/useNavegar"
import { useGetToken } from "../hooks/useGetToken"

export const Header = () =>{
    const {NavegarLogin,NavegarCarrinho,NavegarPrincipal,NavegarCadastro,NavegarPerfilUsuario,NavegarProdutos,NavegarBebidas} = useNavegar();
    const [id,role] = useGetToken();
    
    return(
        <HeaderDiv>
            <LogoHeader onClick={NavegarPrincipal} src={logo} alt="logo"/>
            <Nav>
                <A onClick={NavegarPrincipal}>Principal</A>
                <A onClick={NavegarBebidas}>Bebidas</A>
                <A onClick={NavegarPerfilUsuario}>Perfil</A>
            </Nav>
            <Nav>
                {!role && 
                    <ButtonHeader onClick={NavegarLogin}>Logar</ButtonHeader>
                }  
                
                <ImgCarrinho onClick={() => NavegarCarrinho()} src={sacola} alt="Carrinho de compras"/>
            </Nav>
            
        </HeaderDiv>
    )
}