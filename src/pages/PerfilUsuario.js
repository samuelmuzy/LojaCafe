import { useProdutos } from "../hooks/useProdutos";
import { Loading } from "../components/Loading";
import { useGetToken } from "../hooks/useGetToken";
import { useNavigate } from "react-router-dom";
import { Perfil } from "../components/Perfil";
import { Header } from "../components/Header";
import { DivSemConta } from "../styles/CardDeUsuarios";
import { CrieUmaConta } from "../components/CrieUmaConta";
import { Footer } from "../components/Footer";
import { ApiUrl } from "../const/apiUrl";

export const PerfilUsuario = () =>{

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const [id,role] = useGetToken(token);
    
    const [protutos,setProdutos,isLoading,error] = useProdutos(`${ApiUrl}/clientes/buscarid/${id}`);

    
    
    const perfilUsuario = protutos.map((prod)=>{
        return(
            <Perfil
                key={prod.dfid_cliente} 
                nome={prod.dfnome_cliente}
                email={prod.dfemail_cliente}
                telefone={prod.dftelefone_cliente}
                cargo={prod.dfuser_role}
                deslogar={()=>deslogar()}
            />
        )
    })

    const deslogar = () =>{
        localStorage.removeItem("token")
        window.location.reload();
    }


    return(
        <>
            <Header></Header>
            
            {isLoading &&
                <Loading></Loading>
            }
            
            {!isLoading && error && id && <p>{error}</p>}

            {!isLoading && protutos && role &&
                    perfilUsuario
            }
            {!token &&
                <CrieUmaConta/>
            }
            <Footer/>
        </>
    )
}