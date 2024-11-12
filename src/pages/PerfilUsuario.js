import { useProdutos } from "../hooks/useProdutos";
import { Loading } from "../components/Loading";
import { useGetToken } from "../hooks/useGetToken";
import { useProtectedPage } from "../hooks/useVerificarToken";

export const PerfilUsuario = () =>{

    const token = localStorage.getItem("token");

    const [id,role] = useGetToken(token);
    
    const [protutos,setProdutos,isLoading,error] = useProdutos(`http://localhost:3003/clientes/buscar/${id}`);

    useProtectedPage();
    
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

    return(
        <>
            {isLoading &&
                <Loading></Loading>
            }
            {!isLoading && 
                listar
            }
            {role === 'USER' &&
                <p>ola</p>
            }
            {role === 'ADMIN' &&
                <p>chefe</p>
            }
            
        </>
    )
}