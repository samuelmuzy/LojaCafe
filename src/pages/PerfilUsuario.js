import { jwtDecode } from "jwt-decode";
import { useProdutos } from "../hooks/useProdutos";
import { Loading } from "../components/Loading";

export const PerfilUsuario = () =>{

    const token = localStorage.getItem("token");
    
    const getUserIdFromToken = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            return [decodedToken.id,decodedToken.role]; // Altere 'userId' para a chave correta dentro do seu payload
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
            return null;
        }
    };

    const [id,role] =  getUserIdFromToken(token);
    
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

    return(
        <>
            {isLoading &&
                <Loading></Loading>
            }
            {!isLoading && 
                listar
            }
            {role == 'USER' &&
                <p>ola</p>
            }
            {role == 'ADMIN' &&
                <p>chefe</p>
            }
            
        </>
    )
}