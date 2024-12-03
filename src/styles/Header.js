import styled from "styled-components";

export const A = styled.a`
    cursor: pointer;
    color: white;
`
export const HeaderDiv = styled.header`
    display: flex;
    background-color: #1c1c1b;
    justify-content: space-evenly;
    gap: 50px;
    padding: 5%;
    align-items: center;
    padding: 0.5% 0 1% 0%;
`

export const Nav = styled.nav`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
`
export const InputHeader = styled.input`
    width: 40%;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    border: solid 1px #f2d093;
`


export const ImgCarrinho = styled.img`
    width: 50px; /* Define um tamanho fixo */
    height: auto; /* Mantém a proporção */
    cursor: pointer;
`;

export const LogoHeader = styled.img`
    width: 6%; /* Define um tamanho fixo */
    height: auto;
    cursor: pointer;
`

export const ButtonHeader = styled.button`
    width: 90px;
    height: 35px;
    color: #9c7561;
    font-size: 15px;
    border-radius: 8px;
    background: #e8e8e8;
    cursor: pointer;
    border: 1px solid #9c7561;


  &:hover {
    border: 1px solid white;
  }

 
`