import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { ModalS,DivModal,InputModal, ButtonModal, DivButtons } from "../../styles/Modal";
import { useState } from "react";
import { InputFormulario } from "../Inputs/InputFormulario";
import { ApiUrl } from "../../const/apiUrl";

export const Upload = (props) =>{
    
    const { modalEstado, onClickFecharModal } = props;
    const [error,setError] = useState("");

    const [form, onChange, resetForm, setForm] = useForm({
        nome: "",
        descricao: "",
        preco: "",
        disponivel: true,
        file: null,
    });

    const token = localStorage.getItem("token")
    
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Obtém o arquivo selecionado
        setForm({ ...form, file });
    };

    const alterarUsuario = (event) =>{
        event.preventDefault();

    // Criando um FormData para enviar o arquivo e outros dados
        const formData = new FormData();
        formData.append("nome", form.nome);
        formData.append("descricao", form.descricao);
        formData.append("preco", form.preco);
        formData.append("disponivel", form.disponivel ? 1 : 0); // Converte booleano para 1 ou 0
    
        if (form.file) {
            formData.append("file", form.file);
        }
        
        axios.post(`${ApiUrl}/bebidas`,formData , {
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
                      <h2>Adicionar Bebida</h2>
                      <InputFormulario
                          name="nome"
                          texto="Nome"
                          type="text"
                          value={form.nome}
                          onChange={onChange}
                      />
                      <InputFormulario
                          name="descricao"
                          texto="Descrição"
                          type="text"
                          value={form.descricao}
                          onChange={onChange}
                      />
                      <InputFormulario
                          name="preco"
                          texto="Preço"
                          type="number"
                          value={form.preco}
                          onChange={onChange}
                      />
                      <div>
                          <label>
                          Disponível:
                          <input
                              name="disponivel"
                              type="checkbox"
                              checked={form.disponivel}
                              onChange={(e) => setForm({ ...form, disponivel: e.target.checked })}
                          />
                          </label>
                      </div>
                      <div>

                      <input type="file" onChange={handleFileChange} accept="image/*"/>
      
                      </div>
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

