import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
export const useProtectedPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
    
        const token = localStorage.getItem("token");
    
        if (!token) {
            navigate("/");
        }
    
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const currentTime = Date.now() / 1000; // in seconds
        
        if (currentTime > decodedToken.exp) {
            localStorage.removeItem("token");
            navigate("/");
        }
        
    }, [navigate]);
};
