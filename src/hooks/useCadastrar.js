import { useState } from 'react';
import axios from 'axios';

export const useCadastrar = (url) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [sucesso, setSucesso] = useState("");

    const cadastrar = (body,resetForm) => {
        setIsLoading(true);
        axios.post(url, body)
            .then((response) => {
                setSucesso(response.data);
                setError("");
                setIsLoading(false);
                resetForm()
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.response?.data || "Nenhum dado na resposta");
            });
    };

    return [cadastrar, isLoading, error, sucesso];
};
