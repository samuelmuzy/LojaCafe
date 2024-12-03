import { StyledWrapper } from "../../styles/FormLogin";

export const ButtonForm = (props) =>{
    return (
        <StyledWrapper>
          <button onClick={props.onClick}>{props.texto}</button>
        </StyledWrapper>
      );
}