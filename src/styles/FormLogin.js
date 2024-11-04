import styled from "styled-components";
import imagem from '../assets/woman-drinking-hot-chocolate-cafe_batcheditor_fotor.jpg'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    gap:30px;
    width: 55%;
    margin: 5%;
    text-align: center;
    height: 50vh;
`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 99vh;
`
export const Input = styled.input`
    width: 95%;
    height: 50px;
    min-height: 40px; /* Define uma altura mínima */
    max-height: 60px; /* Define uma altura máxima */
    border-radius: 5px;
    border: 1px solid black;
    padding-left: 1%;
`;

export const DivImagem = styled.div`
    background-image: url(${imagem});
    background-size: cover;
    background-position: center; /* Centraliza a imagem */
    width: 100%;
    height: 101vh;
    display: flex;
    justify-content: center;
`

export const DivImagemCadastro = styled.div`
    background-image: url(${imagem});
    background-size: cover;
    background-position: center; /* Centraliza a imagem */
    width: 100%;
    height: 101vh;
    display: flex;
    justify-content: center;
`
