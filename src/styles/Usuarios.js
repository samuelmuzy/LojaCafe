import styled from "styled-components";

export const DivUsuarios = styled.div`
  margin: 2%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 2%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const ButtonAlterar = styled.button`
  width: 100px;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 2%;
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