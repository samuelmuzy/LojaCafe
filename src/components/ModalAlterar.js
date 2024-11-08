import axios from "axios";
import { useForm } from "../hooks/useForm";
import { ModalS,DivModal } from "../styles/Modal";
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
                        <p>Editar usuário</p>
                        <input value={form.nome} onChange={onChange} name="nome"/>
                        <input value={form.email} onChange={onChange} name="email"/>
                        <input value={form.telefone} onChange={onChange} name="telefone"/>

                        <button onClick={onClickFecharModal}>Fechar</button>
                        <button onClick={alterarUsuario}>Salvar</button>
                        
                    </DivModal>
                </ModalS>
            : 
            <></>
            }
        </div>
    )
}