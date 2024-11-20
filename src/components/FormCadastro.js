import { useForm } from "../hooks/useForm";
import { Loading } from "../components/Loading";
import { useNavegar } from "../hooks/useNavegar";
import { Formulario,P } from "../styles/FormLogin";
import { useCadastrar } from "../hooks/useCadastrar";
import { InputFormulario } from "./InputFormulario";
import { ButtonForm } from "./ButtonForm";

export const FormCadastro = () =>{
    
    const [form, onChange, resetForm] = useForm({
        nome: "",
        email: "",
        senha: "",
        telefone: ""
    });
    
    const {NavegarLogin} = useNavegar();
    const [cadastrar, isLoading, error, sucesso] = useCadastrar("http://localhost:3003/clientes/cadastro");

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

    return(
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
                    name="email" 
                    texto="Email" 
                    type="email" 
                    value={form.email} 
                    onChange={onChange} 
                    
                    />
                <InputFormulario 
                    name="senha" 
                    texto="Senha" 
                    type="password" 
                    value={form.senha} 
                    onChange={onChange} 
                    
                    />
                <InputFormulario 
                    name="telefone" 
                    texto="Telefone" 
                    type="tel" 
                    value={form.telefone} 
                    onChange={handleTelefoneChange} 
                    pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$" 
                    
                />
                <ButtonForm texto={"cadastrar-se"} />
                
                {!isLoading && (
                    <>
                        <P onClick={NavegarLogin}>Já tenho uma conta</P>
                        <p>{error || sucesso}</p>
                        
                    </>
                )}
                {isLoading && <Loading />}
            </Formulario>
    )
}