import styled from "styled-components"

export const DivPerfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    width: 20%;
    padding: 2%;
    gap: 10px;
    @media (max-width: 767px) {
        background-image: none;
        height: 40vh;
        width: 90%;
        
    }
`
export const DivItens = styled.div`
    display: flex;
    flex-direction: column;
`
export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    gap: 10px;
`
export const P = styled.p`
    
`
export const ButtonPerfil = styled.button`
    width: 80%;
    padding: 2%;
    align-self: center;
`