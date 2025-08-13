import styled from "styled-components";

export const DivBebidas = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Alinha os itens à esquerda */
    padding: 20px;
    width: 85%;
    gap: 5px;
    @media (max-width: 756px) {
        justify-content: center;
        width: 100%;
        padding: 0;
    }  /* Espaço consistente entre os cards */
`;

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1 1 280px; /* Tamanho fixo, com comportamento responsivo */
    margin: 5px;
    max-width: 300px;
    border: 1px solid #ddd;
    padding: 15px;
    box-sizing: border-box;
    text-align: start;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`;

export const ImgBebidas = styled.img`
    width: 100%; /* Faz a imagem preencher a largura do card */
    height: 250px; /* Define uma altura fixa consistente para todas as imagens */
    object-fit: contain; /* Ajusta o conteúdo da imagem sem distorção */
    border-radius: 8px; /* Opcional: bordas arredondadas para melhorar a estética */
    margin-bottom: 10px; /* Espaço inferior para separação da descrição */
`;

export const DivInputNumerico = styled.div`
    display: flex;
    align-items: center; /* Centraliza os itens verticalmente */
    justify-content: space-between;
    gap: 10px; /* Adiciona espaço entre os elementos */
    margin-top: 10px;
    margin-bottom:20px;/* Espaço extra acima */
`;

export const DivInput = styled.div`
    display: flex;
    align-items: center; /* Centraliza os itens verticalmente */
    border: solid black 1px;
    justify-content: center;
    width: 30%;
    gap: 5px;
`;

export const ButtonBebidas = styled.button`
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

export const ImgLixeira = styled.img`
    width: 12%;
`

export const ButtonInputNumerico = styled.button`
    text-align: center;
    width: 40%;
    cursor: pointer;
    background-color: white;
    border: solid white;
    font-size: 20px;
`
export const PaginationButton = styled.button`
    cursor: pointer;
    margin: 1%;
    border: solid black 1px;
    width: 30px;
    @media (max-width: 756px) {
        margin-top: 10%;
    } 
`

export const DivInputPesquisa = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 3%;
`

export const InputPesquisa = styled.input`
    width: 30%;
    height: 40px;
    border-radius: 1px;
    @media (max-width: 756px) {
        width: 50%;
    } 
`
