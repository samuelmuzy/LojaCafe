import { Div, DivImagem} from "../styles/FormLogin";
import { FormCadastro } from "../components/formularios/FormCadastro";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Cadastro = () => {

    return (
    <>
        <Header></Header>
        <Div>
            <FormCadastro></FormCadastro>
            <DivImagem></DivImagem>
        </Div>
        <Footer/>
    </>
    );
};
