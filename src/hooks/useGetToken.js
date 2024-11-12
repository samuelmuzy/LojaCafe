import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export const useGetToken = () => {
    const [id, setId] = useState("");
    const [role, setRole] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        try {
            const decodedToken = jwtDecode(token);
            setId(decodedToken.id);
            setRole(decodedToken.role);
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    }, [token]);

    return [id, role];
};
