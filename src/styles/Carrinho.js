import styled from "styled-components";

export const DivCarrinho = styled.div`
    display: flex;
    @media (max-width: 756px) {
        flex-direction: column;
    } 
`;

export const DivCardCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2% 3% 2% 5%;
    width: 50%;
    @media (max-width: 756px) {
        width: 90%;
    } 
`

export const DivCarrinhoVazio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    gap: 20px;
    @media (max-width: 756px) {
        height: 90vh;
        justify-content: center;
    } 
`
export const ImagemCarrinhoVazio = styled.img`
    width: 20%;
    @media (max-width: 756px) {
        width: 50%;
    } 
`

export const ButtonVazio = styled.button`
    width: 30%;
    height: 40px;
    cursor: pointer;
    color: white;
    background-color: #659c57;
    border: solid #659c57;
    transition: 100ms;
    border-radius: 10px;
    &:hover{
        background-color: #9bc493;
        border: solid #9bc493;
    }
    @media (max-width: 756px) {
        width: 50%;
    } 
`


export const CardCarinho = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 5%;
    text-align: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    @media (max-width: 756px) {
        flex-direction: column;
    } 
`

export const ImgBebidaCarrinho = styled.img`
    width: 20%;
    height: 100px;
    object-fit: contain;
    @media (max-width: 756px) {
        width: 50%;
        height: 150px;
        margin: 7%;
    } 
`

export const DivPagamento = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 5% 3% 5% 3%;
    padding: 3%;
    align-items: flex-start;
    justify-content: space-around;
    height: 30vh;
    border: solid black 1px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`

export const ButtonPagamento = styled.button`
    width: 100%;
    height: 40px;
    background-color: #659c57;
    color: white;
    border: solid #659c57;
    transition: 100ms;
    cursor: pointer;
    &:hover{
        background-color: #9bc493;
        border: solid #9bc493;
    }
`
export const Gap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 756px) {
        flex-direction: row;
        text-align: center;
    } 
`
export const GapQ = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 756px) {
        
    } 
`
export const CardC = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 756px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 30px;
        padding: 6%;
    } 
`