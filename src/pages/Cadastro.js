import { Div, DivImagem} from "../styles/FormLogin";
import { FormCadastro } from "../components/FormCadastro";
import { Header } from "../components/Header";

export const Cadastro = () => {

    return (
    <>
        <Header></Header>
        <Div>
            <FormCadastro></FormCadastro>
            <DivImagem></DivImagem>
        </Div>
    </>
    );
};
