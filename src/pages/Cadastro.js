import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Div, DivImagemCadastro, Formulario, Input } from "../styles/FormLogin";
import imagemCafe from '../assets/coffee-shop-cafe-latte-cappuccino-newspaper-concept.jpg';
import { useCadastrar } from "../hooks/useCadastrar";

export const Cadastro = () => {
    const [form, onChange, resetForm] = useForm({
        nome: "",
        email: "",
        senha: "",
        telefone: ""
    });

    const [cadastrar, isLoading, error, sucesso] = useCadastrar();
    const navigate = useNavigate();

    const navegarLogin = () => {
        navigate("/");
    };

    const Cadastro = (event) => { 
        event.preventDefault();
        cadastrar(form, resetForm);
    };

    const handleTelefoneChange = (e) => {
        const { value } = e.target;
        const telefonePattern = /^[0-9 ()-]*$/; // Permite apenas números e caracteres de formatação

        // Permite alterar apenas se a entrada estiver dentro do padrão
        if (telefonePattern.test(value)) {
            onChange(e);
        }
    };

    return (
        <Div>
            <Formulario onSubmit={Cadastro}>
                <h1>Cadastro</h1>
                <Input
                    value={form.nome}
                    type="text"
                    onChange={onChange}
                    name="nome"
                    placeholder="Nome"
                    required
                />
                <Input
                    value={form.email}
                    type="email"
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    required
                />
                <Input
                    value={form.senha}
                    type="password"
                    onChange={onChange}
                    name="senha"
                    placeholder="Senha"
                    required
                />
                <Input
                    pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
                    type="tel" 
                    value={form.telefone}
                    onChange={handleTelefoneChange}
                    name="telefone"
                    placeholder="Telefone"
                    required
                />
                <Input type="submit" value="Cadastrar-se" />
                
                {!isLoading && (
                    <>
                        <p onClick={navegarLogin}>Já tenho uma conta</p>
                        <p>{error}</p>
                        <p>{sucesso}</p>
                    </>
                )}
                {isLoading && <Loading />}
            </Formulario>

            <DivImagemCadastro imagem={imagemCafe}></DivImagemCadastro>
        </Div>
    );
};
