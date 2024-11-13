import { useProdutos } from "../hooks/useProdutos";
import { Loading } from "../components/Loading";
import { useGetToken } from "../hooks/useGetToken";
import { useNavigate } from "react-router-dom";

export const PerfilUsuario = () =>{

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const [id,role] = useGetToken(token);
    
    const [protutos,setProdutos,isLoading,error] = useProdutos(`http://localhost:3003/clientes/buscar/${id}`);

    
    
    const listar = protutos.map((prod)=>{
        return(
            <div key={prod.dfid_cliente}>
                <p>{prod.dfnome_cliente}</p>
                <p>{prod.dfemail_cliente}</p>
                <p>{prod.dftelefone_cliente}</p>
                <p>{prod.dfuser_role}</p>
            </div>
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
            {!isLoading && role &&
            <>
                {listar}
                <button onClick={deslogar}>deslogar</button>
            </>
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