import styled from 'styled-components';

export const ModalS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`
export const texto = styled.p`

`
export const InputModal = styled.input`
    width: 100%;
    padding: 3% 1% 3% 1%;
    margin: 5% 0 5% 0;
    border: 1px solid black;
`
export const DivModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%,-50%);
    padding: 5%;
    background-color: #fff;
    border-radius:30px;
    gap: 5px;
`
export const DivButtons = styled.div`
    display: flex;
`
export const ButtonModal = styled.button`
    width: 100px;
    padding: 3%;
    margin: 2%;
    border-radius: 5px;
    background-color: lightseagreen;
    &:hover {
        background-color: lightseagreen;
        border: 1px solid lightblue;
    }
`
