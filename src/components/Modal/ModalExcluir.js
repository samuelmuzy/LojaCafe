import React, { useState } from "react";
import axios from "axios";
import { ModalS,DivModal, ButtonModal, DivButtons } from "../../styles/Modal";
import { buscarProdutos } from "../../service/VerificarProdutos";


export const ModalExcluir = (props) => {

        const { modalEstado, id , onClickFecharModal} = props;
        const [error,setError] = useState("");
        //Recebe um estado por meio do Componente Postagem assim abrindo o modal quando for verdadeiro
        const token = localStorage.getItem("token");

        const deletarUsuario = () => {
            axios.delete(`http://localhost:3003/bebidas/deletar/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                console.log(response.data);
                props.setBebidas((prevBebidas) => prevBebidas.filter(bebida => bebida.dfid_bebida !== id)); // Atualiza o estado removendo a bebida deletada
                onClickFecharModal();
            })
            .catch((error) => {
                setError(error.response.data);
            })
        }
        return (
            <div>
                {modalEstado ? 
                    <ModalS>
                        <DivModal>
                            <h2>Tem certeza em deletar usuário</h2>
                            <DivButtons>
                                <ButtonModal onClick={onClickFecharModal}>Fechar</ButtonModal>
                                <ButtonModal onClick={deletarUsuario}>Sim</ButtonModal>
                                <p>{error}</p>
                            </DivButtons>
                        </DivModal>
                    </ModalS>
                : 
                <></>
                }
            </div>
        )
    
}