import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useGetToken } from './useGetToken';
export const useProtectedPage = () => {

    const navigate = useNavigate();
    const [id,role] = useGetToken();


    useEffect(() => {
    
        const token = localStorage.getItem("token");
    
        if (!token) {
            navigate("/");
            return
        }

    
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const currentTime = Date.now() / 1000; // in seconds
        
        if (currentTime > decodedToken.exp) {
            localStorage.removeItem("token");
            navigate("/");
        }
        
    }, [navigate]);
};
