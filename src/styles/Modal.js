import styled from 'styled-components';

export const modal = styled.div `
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
`

export const A = styled.button `
    margin-bottom: 10px;
    background-color: white;
    border: none;
    text-decoration-line: blue;
`

export const ModalS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    
`
export const DivModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 5% 10% 10% 10%;
    background-color: #fff;
    border-radius:30px;
    overflow: hidden;
    overflow-y: scroll;
    max-width: 40%;
    max-height: 40vh;
`