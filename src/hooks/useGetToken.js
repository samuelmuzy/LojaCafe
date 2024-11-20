import {jwtDecode} from "jwt-decode";
import { useState, useEffect } from "react";

export const useGetToken = () => {
    const [id, setId] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decodedToken = jwtDecode(token); // Decodifica o token
                setId(decodedToken.id); // Define o ID no estado
                setRole(decodedToken.role); // Define o Role no estado
            } catch (error) {
                console.error("Erro ao decodificar o token:", error);
            }
        }
    }, []);

    return [id, role];
};

