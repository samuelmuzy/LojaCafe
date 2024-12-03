import { useNavegar } from "../../hooks/useNavegar"
import { DivPrincipal, Texto, Titulo,Button,DivCafeMaior,Cartao, DivImagemCafe, ImagemPromo, TextoPromo } from "../../styles/Principal"
import { CardCafe } from "./CardCafe"
import imagemCafe1 from '../../assets/coffe.png'
import imagemCafe2 from '../../assets/xicara-de-cafe.png'
import imagemCafe3 from '../../assets/xicara-de-cafe (1).png'
import imagemCafe4 from '../../assets/coffee cup-cuate.png'
import { Produto } from "./Produto"


export const LandPage = () =>{
    const {NavegarBebidas} = useNavegar()
    return(
        <>
            <DivPrincipal>
                <Titulo>Café com Alma</Titulo>
                <Texto>No Café com Alma, servimos cafés especiais e quitutes em um espaço acolhedor. Venha viver momentos únicos com sabor e carinho!</Texto>
                <Button onClick={NavegarBebidas}>Clique aqui</Button>
            </DivPrincipal>

            <Cartao>
                <h2>Referencia em coffee</h2>
                <DivCafeMaior>
                    <CardCafe texto={"No Café com Alma, servimos cafés especiais e quitutes em um espaço acolhedor. Venha viver momentos únicos com sabor e carinho!"} imagem={imagemCafe1}/>
                    <CardCafe texto={"No Café com Alma, servimos cafés especiais e quitutes em um espaço acolhedor. Venha viver momentos únicos com sabor e carinho!"} imagem={imagemCafe2}/>
                    <CardCafe texto={"No Café com Alma, servimos cafés especiais e quitutes em um espaço acolhedor. Venha viver momentos únicos com sabor e carinho!"} imagem={imagemCafe3}/>
                </DivCafeMaior>
            </Cartao>

            <DivImagemCafe>
                <TextoPromo>No Café com Alma, servimos cafés especiais e quitutes em um espaço acolhedor. Venha viver momentos únicos com sabor e carinho!</TextoPromo>
                <ImagemPromo src={imagemCafe4} alt="imagem cafe"/>
            </DivImagemCafe>

            <Cartao>
                <h2>Conheca nossos produtos</h2>
                <Produto></Produto>
            </Cartao>
        </>
    )
}