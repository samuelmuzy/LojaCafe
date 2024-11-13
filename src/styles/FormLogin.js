import styled from "styled-components";
import imagem from '../assets/woman-drinking-hot-chocolate-cafe_batcheditor_fotor.jpg'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6%;
    gap:30px;
    width: 55%;
    margin: 5%;
    text-align: center;
    height: 50vh;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    @media (max-width: 767px) {
        background-image: none;
        height: 90vh;
        width: 90%;
        
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 99vh;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
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

export const FormField = styled.div`
  margin: 10px;
  width: 95%;
  position: relative;
`;

export const InputS = styled.input`
    width: 95%;
    height: 30px;
    min-height: 35px; /* Define uma altura mínima */
    max-height: 60px;
    padding: 10px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
    color: #333;
    font-size: 16px;
    font-weight: 550;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 0 5px transparent;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px #333;
  }

  &:focus + span,
  &:valid + span {
    transform: translateY(-32px) translateX(-5px) scale(0.95);
    transition: 0.3s ease-in-out;
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 15px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  pointer-events: none;
`;


export const DivImagem = styled.div`
    background-image: url(${imagem});
    background-size: cover;
    background-position: center; /* Centraliza a imagem */
    width: 100%;
    height: 101vh;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
        background-image: none;
    }
`

export const DivImagemCadastro = styled.div`
    background-image: url(${imagem});
    background-size: cover;
    background-position: center; /* Centraliza a imagem */
    width: 100%;
    height: 101vh;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
        background-image: none;
        width: 0;
        height: 0;
    }
`
