import {useState,useEffect} from 'react'
import axios from 'axios'

export function useProdutos(url){

    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("")

    const adicionarProdutos = () =>{
        setIsLoading(true);
        axios.get(url)
        .then((Response)=>{
            setData(Response.data);
            setIsLoading(false);
            setError("")
        })
        .catch((error)=>{
            setIsLoading(false);
            setError(error.response?.data || "Nenhum dado na resposta")
        })
    }
    
    useEffect(()=>{
        adicionarProdutos();
    },[url])

    return [data,setData,isLoading,error];
}