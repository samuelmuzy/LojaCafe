import { DivButtons } from "../styles/Modal"
import { ButtonAlterar, DivUsuarios } from "../styles/Usuarios"

export const CardDeUsuario = (props) =>{
    return(

        <DivUsuarios key={props.id}>
            <p>{props.nome}</p>
            <p>{props.email}</p>
            <p>{props.telefone}</p>
            <p>{props.role}</p>
            <DivButtons>
                <ButtonAlterar onClick={() => props.abrirModalExcluir(props.id)}>Deletar</ButtonAlterar>
                <ButtonAlterar onClick={() => props.abrirModalAlterar(props.id)}>Alterar</ButtonAlterar>
            </DivButtons>
        </DivUsuarios>
    )
}