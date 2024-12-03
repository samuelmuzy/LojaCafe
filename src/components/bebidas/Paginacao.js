import { PaginationButton } from "../../styles/Bebidas"

export const Paginacao = ({page,setCurrentPage,currentPage}) =>{
    return(
        <div>
            {Array.from(Array(page),(item,index)=>{
                return <PaginationButton style={index === currentPage ? {backgroundColor:"black", color:"white"} : null} value={index} onClick={(e)=> setCurrentPage(Number(e.target.value))}>{index + 1}</PaginationButton>
            })}
        </div>
    )
}