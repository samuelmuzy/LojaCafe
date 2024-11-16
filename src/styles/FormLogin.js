import styled from "styled-components";
import imagem from '../assets/woman-drinking-hot-chocolate-cafe_batcheditor_fotor.jpg'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6%;
    gap:20px;
    width: 55%;
    margin: 5%;
    text-align: center;
    height: 60vh;
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
    height: 99vh;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
        background-image: none;
    }
`

export const StyledWrapper = styled.div`
    width: 95%;
  button {
    appearance: none;
    background-color: transparent;
    border: 0.125em solid #1A1A1A;
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    width: 100%; /* Define a largura total para o botão */
    outline: none;
    padding: 1em 0; /* Ajuste o padding horizontal se necessário */
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
export const P = styled.p`
  cursor: pointer;
  color: navy;

`

