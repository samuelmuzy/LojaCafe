import styled from "styled-components";

export const DivBebidas = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Alinha os itens à esquerda */
    padding: 20px;
    width: 85%;
    gap: 5px; /* Espaço consistente entre os cards */
`;

export const DivCard = styled.div`
    flex: 1 1 280px; /* Tamanho fixo, com comportamento responsivo */
    margin: 5px;
    max-width: 300px;
    border: 1px solid #ddd;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`;

export const ImgBebidas = styled.img`
    width: 80%;
`
