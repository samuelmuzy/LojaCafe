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

export const DivSemConta = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    gap: 16px;
    background: linear-gradient(180deg, #fff 0%, #f8eedb 100%);
    text-align: center;
`

export const ImagemConta = styled.img`
    width: 220px;
    max-width: 60vw;
`

export const ButtonConta = styled.button`
    min-width: 160px;
    height: 44px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1px solid #482307;
    background-color: #fff;
    color: #482307;
    font-weight: 700;
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;

    &:hover {
        background-color: #482307;
        color: #fff;
        box-shadow: 0 8px 15px rgba(81, 41, 10, 0.25);
        transform: translateY(-2px);
    }
`

export const TituloCTA = styled.h2`
    margin-top: 8px;
    margin-bottom: 4px;
    font-size: 28px;
    color: #482307;
`

export const SubtituloCTA = styled.p`
    margin: 0 16px 12px;
    max-width: 520px;
    color: #5c3b1d;
`

export const BotoesCTA = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
`

