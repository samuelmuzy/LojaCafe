import { useProdutos } from "../hooks/useProdutos";
import { Loading } from "../components/Loading";
import { useGetToken } from "../hooks/useGetToken";
import { useNavigate } from "react-router-dom";
import { Perfil } from "../components/Perfil";

export const PerfilUsuario = () =>{

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const [id,role] = useGetToken(token);
    
    const [protutos,setProdutos,isLoading,error] = useProdutos(`http://localhost:3003/clientes/buscar/${id}`);

    
    
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

    const navegarLogin = () =>{
        navigate("/")
    }

    return(
        <>
            {isLoading &&
                <Loading></Loading>
            }
            
            {!isLoading && !id && <p>{error}</p>}

            {!isLoading && protutos && role &&
                    perfilUsuario
            }
            {!role &&
                <>
                    <p>Logue em uma conta</p>
                    <button onClick={navegarLogin}>Logar</button>
                </>
            }
            
            
        </>
    )
}