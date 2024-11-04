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
        })
        .catch((erro)=>{
            setIsLoading(false);
            setError(erro)
        })
    }
    
    useEffect(()=>{
        adicionarProdutos();
    },[url])

    return [data,setData,isLoading,error];
}