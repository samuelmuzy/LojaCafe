import axios from "axios";
import { useCadastrar } from "../hooks/useCadastrar";
import { useForm } from "../hooks/useForm";
import { useNavegar } from "../hooks/useNavegar";
import { Formulario, P } from "../styles/FormLogin";
import { ButtonForm } from "./ButtonForm";
import { InputFormulario } from "./InputFormulario";
import { Loading } from "./Loading";

export const Upload = () => {
  const [form, onChange, resetForm, setForm] = useForm({
    nome: "",
    descricao: "",
    preco: "",
    disponivel: true,
    file: null, // Armazena o arquivo selecionado
  });

  const { NavegarLogin } = useNavegar();
  const token = localStorage.getItem("token");

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtém o arquivo selecionado
    setForm({ ...form, file });
  };

  const Cadastro = (event) => {
    event.preventDefault();

    // Criando um FormData para enviar o arquivo e outros dados
    const formData = new FormData();
    formData.append("nome", form.nome);
    formData.append("descricao", form.descricao);
    formData.append("preco", form.preco);
    formData.append("disponivel", form.disponivel ? 1 : 0); // Converte booleano para 1 ou 0
 // Converte para string
    if (form.file) {
      formData.append("file", form.file);
    }

    axios
      .post("http://localhost:3003/bebidas", formData, {
        headers: {
          Authorization: token, 
        },
      })
      .then((response) => {
        console.log(response.data);
        resetForm(); // Reseta o formulário após sucesso
      })
      .catch((error) => {
        console.log(error.response?.data || error.message); // Melhora a exibição do erro
      });
  };

  return (
    <Formulario onSubmit={Cadastro}>
      <h1>Cadastro</h1>
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

          <input type="file" onChange={handleFileChange} />
        
      </div>
      <ButtonForm texto={"Cadastrar-se"} />

      <p>{/* Exibir erro, se necessário */}</p>
    </Formulario>
  );
};

