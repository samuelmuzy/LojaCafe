import { ButtonPerfil, DivItens, DivMain, DivPerfil, P } from "../styles/CardDeUsuarios";
export const Perfil = (props) =>{
    return(
        <DivPerfil>
            <DivItens key={props.key}>
                <h3>Nome</h3>
                <P>{props.nome}</P>
                <h3>Email</h3>
                <P>{props.email}</P>
                <h3>Telefone</h3>
                <P>{props.telefone}</P>
                <h3>Cargo</h3>
                <P>{props.cargo}</P>
            </DivItens>
                    
            <ButtonPerfil onClick={props.deslogar}>deslogar</ButtonPerfil>
        </DivPerfil>
        
    )
}