import { Nav,A,HeaderDiv,ImgCarrinho,LogoHeader,ButtonHeader, MenuButton, DrawerOverlay, DrawerPanel } from "../styles/Header"
import sacola from '../assets/carrinho-de-compras (2).png'
import logo from '../assets/leonardoLogo.png'
import { useNavegar } from "../hooks/useNavegar"
import { useGetToken } from "../hooks/useGetToken"
import { useState } from "react"

export const Header = () =>{
    const {NavegarLogin,NavegarCarrinho,NavegarPrincipal,NavegarCadastro,NavegarPerfilUsuario,NavegarProdutos,NavegarBebidas} = useNavegar();
    const [id,role] = useGetToken();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(prev => !prev);
    const closeDrawerAnd = (fn) => () => { setDrawerOpen(false); fn(); }
    
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
                <MenuButton aria-label="Abrir menu" onClick={toggleDrawer}>
                    <span />
                </MenuButton>
            </Nav>
            <DrawerOverlay open={drawerOpen} onClick={toggleDrawer} />
            <DrawerPanel open={drawerOpen}>
                <A onClick={closeDrawerAnd(NavegarPrincipal)}>Principal</A>
                <A onClick={closeDrawerAnd(NavegarBebidas)}>Bebidas</A>
                <A onClick={closeDrawerAnd(NavegarPerfilUsuario)}>Perfil</A>
                {!role && <ButtonHeader onClick={closeDrawerAnd(NavegarLogin)}>Logar</ButtonHeader>}
            </DrawerPanel>
        </HeaderDiv>
    )
}