import { useEffect, useState } from "react";
import axios from "axios";
import { useGetToken } from "../hooks/useGetToken";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Perfil } from "../components/Perfil";
import { CrieUmaConta } from "../components/CrieUmaConta";
import { ApiUrl } from "../const/apiUrl";
import { useNavigate } from "react-router-dom";


export const PerfilUsuario = () => {
  const token = localStorage.getItem("token");
  const [id, role] = useGetToken(token);
  const navigate = useNavigate();

  const [perfilData, setPerfilData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deslogar = () => {
    localStorage.removeItem("token");
    navigate('/')
  };

  async function getUsuarios(){
    setLoading(true);
    try {
      const response = await axios.get(`${ApiUrl}/clientes/buscarid/${id}`);
      setPerfilData(response.data);
    } catch (err) {
      setError(err.response?.data || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getUsuarios();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <>
      <Header />

      {error && <CrieUmaConta />}

      {perfilData.length > 0 && role && (
        perfilData.map((cliente) => (
          <Perfil
            key={cliente.dfid_cliente}
            nome={cliente.dfnome_cliente}
            email={cliente.dfemail_cliente}
            telefone={cliente.dftelefone_cliente}
            cargo={cliente.dfuser_role}
            deslogar={deslogar}
          />
        ))
      )}

      <Footer />
    </>
  );
};
