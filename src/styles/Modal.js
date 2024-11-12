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
export const InputModal = styled.input`
    width: 100%;
    padding: 3% 0 3% 0;
    margin: 5% 0 5% 0;
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
    max-width: 50%;
    max-height: 40vh;
`
export const ButtonModal = styled.button`
    width: 100%;
    padding: 3%;
    margin-top: 2%;

`