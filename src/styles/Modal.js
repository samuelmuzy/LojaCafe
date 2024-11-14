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
    gap: 6px;
`

export const ButtonModal = styled.button`
  width: 100px;
  padding: 3%;
  margin: 2%;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  color: #482307;
  font-weight: 700;
  font-size: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2);
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  border: 0 solid #e5e7eb;
  outline: 2px solid transparent;

  &:active {
    background-color: #f3f4f6;
    box-shadow: -1px 2px 5px rgba(81, 41, 10, 0.15), 0px 1px 1px rgba(81, 41, 10, 0.15);
    transform: translateY(0.125rem);
  }

  &:focus {
    box-shadow: rgba(72, 35, 7, 0.46) 0 0 0 4px, -6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2);
  }

`;


