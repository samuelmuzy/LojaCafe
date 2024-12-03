import { DivCafe, ImagemCoffe } from "../../styles/Principal"

export const CardCafe = (props) =>{
    return(
        <DivCafe>
            <ImagemCoffe src={props.imagem} alt="imagemCafe"/>
            <p>{props.texto}</p>
        </DivCafe>
    )
}