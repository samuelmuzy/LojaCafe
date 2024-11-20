import axios from "axios";
import { useForm } from "../hooks/useForm";
import { ModalS,DivModal,InputModal, ButtonModal, DivButtons } from "../styles/Modal";
import { useState } from "react";
export const ModalAlterar = (props) =>{
    
    const { modalEstado, id , onClickFecharModal } = props;
    const [error,setError] = useState("");

    const [form,onChange, resetForm ] = useForm({nome:"",email:"",telefone:""})

    const token = localStorage.getItem("token")

    const alterarUsuario = () =>{
        axios.put(`http://localhost:3003/clientes/alterar/${id}`,form , {
            headers:{
                Authorization:token
            }
        })
        .then((response)=>{
            console.log(response.data)
            setError("");
            resetForm()
            onClickFecharModal()
        })
        .catch((error)=>{
            setError(error.response.data);
        })
    }

    return(
        <div>
            {modalEstado ? 
                <ModalS>
                    <DivModal>
                        <h2>Editar usuário</h2>
                        <InputModal placeholder="Nome" value={form.nome} onChange={onChange} name="nome"/>
                        <InputModal placeholder="Email" value={form.email} onChange={onChange} name="email"/>
                        <InputModal placeholder="telefone" value={form.telefone} onChange={onChange} name="telefone"/>
                        <DivButtons>
                            <ButtonModal onClick={onClickFecharModal}>Fechar</ButtonModal>
                            <ButtonModal onClick={alterarUsuario}>Salvar</ButtonModal>
                        </DivButtons>
                        <p>{error}</p>
                        
                    </DivModal>
                </ModalS>
            : 
            <></>
            }
        </div>
    )
}