import React from "react";
import axios from "axios";
import { ModalS,DivModal, ButtonModal } from "../styles/Modal";


export const ModalExcluir = (props) => {

        const { modalEstado, id , onClickFecharModal} = props;
        //Recebe um estado por meio do Componente Postagem assim abrindo o modal quando for verdadeiro
        const token = localStorage.getItem("token");

        const deletarUsuario = () =>{
            axios.delete(`http://localhost:3003/clientes/${id}`,{
                headers:{
                    Authorization:token
                }
            })
            .then((response)=>{
                console.log(response.data);
                onClickFecharModal()
                
            })
            .catch((error)=>{
                console.log(error.response.data);
            })
            
        }
        return (
            <div>
                {modalEstado ? 
                    <ModalS>
                        <DivModal>
                            <p>Tem certeza em deletar usuário</p>
                            <ButtonModal onClick={onClickFecharModal}>Fechar</ButtonModal>
                            <ButtonModal onClick={deletarUsuario}>Sim</ButtonModal>
                            
                        </DivModal>
                    </ModalS>
                : 
                <></>
                }
            </div>
        )
    
}