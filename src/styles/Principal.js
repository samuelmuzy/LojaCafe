import styled from 'styled-components'
import ImagemP from '../assets/process-coffee-making-using-brand-new-coffee-machine-cafe-by-expirienced-barista.jpg'

export const Button = styled.button`
    height: 7vh;
    width: 14%;
    margin-top: 3%;
    border-radius: 8px;
    background-color: white;
    border: solid 1px #DB8D0F;
    color: black;
    border:solid 1px black;
    margin-left: 8%;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: #7f5736;
    }
    @media (max-width: 756px) {
        width: 50%;
        margin-left: 0%;
    } 
`
export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    color: whitesmoke;
    justify-content: center;
    width: 100%;
    height: 85vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ImagemP});
    background-size: cover;
    @media (max-width: 756px) {
        align-items: center;
        text-align: center;
    }    
`;
export const Texto = styled.p`
    font-size: 26px;
    width: 43%;
    margin-left: 8%;
    margin-top: 3%;
    @media (max-width: 756px) {
        width: 90%;
        margin-left: 0%;
        margin-top: 3%; 
    } 

`
export const Titulo = styled.h1`
    margin-left: 8%;
    font-size: 40px;
    @media (max-width: 756px) {
        text-align: center;
        margin-left: 0%
    } 
`
export const DivImagemCafe = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F5F5DC;
    color: #333333;
    background: linear-gradient(135deg, #f9f6e5, #efeccf), url('cafe-pattern.png');
    background-blend-mode: overlay; /* Combina textura e gradiente */
    background-size: cover;
    padding: 2%;
    @media (max-width: 756px) {
        flex-direction: column-reverse;
        text-align: center;
        padding: 4%;
    } 
`

export const TextoPromo = styled.p`
    font-size: 26px;
    width: 40%;
    margin-top: 3%;
    @media (max-width: 756px) {
        align-items: center;
        width: 90%;
    } 
`

export const DivCafe = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border: solid 1px black;
    padding: 2%;
    gap: 10px;
    text-align: center;
    @media (max-width: 756px) {
        width: 80%;
    } 

`
export const DivCafeMaior = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 756px) {
        flex-direction: column;
    } 
    
`
export const DivBebidasCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Alinha os itens à esquerda */
    width: 100%;
    gap: 5px; /* Espaço consistente entre os cards */
`;
export const ImagemCoffe = styled.img`
    width: 30%;
`
export const Cartao = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 4%;
    gap: 40px;
`
export const ImagemPromo = styled.img`
    width: 30%;
    @media (max-width: 756px) {
        width: 45%;
    } 
`