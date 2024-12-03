import styled from "styled-components";

export const DivCarrinho = styled.div`
    display: flex;
`;

export const DivCardCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2% 3% 2% 5%;
    width: 50%;
`

export const DivCarrinhoVazio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    gap: 20px;
`
export const ImagemCarrinhoVazio = styled.img`
    width: 20%;
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
`

export const ImgBebidaCarrinho = styled.img`
    width: 20%;
    height: 100px;
    object-fit: contain;
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
`