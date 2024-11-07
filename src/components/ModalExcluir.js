import React from "react";
import axios from "axios";
import { ModalS,DivModal } from "../styles/Modal";


export const ModalExcluir = (props) => {

        const { modalEstado, id , onClickFecharModal, deletar } = props;
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
                deletar()
            })
            .catch((error)=>{
                console.log(error.response.data);
            })
            onClickFecharModal()
        }
        return (
            <div>
                {modalEstado ? 
                    <ModalS>
                        <DivModal>
                            <button onClick={onClickFecharModal}>Fechar</button>
                            <button onClick={deletarUsuario}>Sim</button>
                            
                        </DivModal>
                    </ModalS>
                : 
                <></>
                }
            </div>
        )
    
}