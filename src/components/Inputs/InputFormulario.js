import { FormField, InputS, Label } from "../../styles/FormLogin"


export const InputFormulario = (props) =>{
    return(
        <FormField>
            <InputS required pattern={props.pattern} name={props.name} type={props.type} value={props.value} onChange={props.onChange} />
            <Label>{props.texto}</Label>
        </FormField>
    )
}