import styled, { keyframes } from 'styled-components';

// Define a animação de rotação
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Loader = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #b71c1c;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;
