import axios from "axios";
import { useForm } from "../hooks/useForm";
import { ModalS,DivModal,InputModal, ButtonModal, DivButtons } from "../styles/Modal";
export const ModalAlterar = (props) =>{
    
    const { modalEstado, id , onClickFecharModal } = props;

    const [form,onChange, resetForm ] = useForm({nome:"",email:"",telefone:""})

    const token = localStorage.getItem("token")

    const alterarUsuario = () =>{
        axios.put(`http://localhost:3003/clientes/${id}`,form , {
            headers:{
                Authorization:token
            }
        })
        .then((response)=>{
            console.log(response.data)
            onClickFecharModal()
        })
        .catch((error)=>{
            console.log(error.response.data);
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
                        
                        
                    </DivModal>
                </ModalS>
            : 
            <></>
            }
        </div>
    )
}