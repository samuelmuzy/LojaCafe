import { useContext, useEffect, useState } from "react"
import { ButtonInputNumerico, DivInput, DivInputNumerico } from "../../styles/Bebidas"


export const InputNumerico = (props) =>{
    const [numerico,setNumerico] = useState(1);
    
    const somar = () => {
        if(numerico < 30){
            setNumerico(numerico + 1);
        }
    }

    const subTrair = () =>{
        if(numerico > 1){
            setNumerico(numerico - 1);
        }
    }
    useEffect(()=>{
        props.numero(numerico);
    },[numerico])


    return(
        <DivInput>
            <ButtonInputNumerico onClick={subTrair}>-</ButtonInputNumerico>
            <p>{numerico}</p>
            <ButtonInputNumerico onClick={somar}>+</ButtonInputNumerico>
        </DivInput>
    )
}