import styled from "styled-components";

export const A = styled.a`
    cursor: pointer;
    color: white;
	@media (max-width: 767px) {
		font-size: 14px;
	}
`
export const HeaderDiv = styled.header`
    display: flex;
    background-color: #1c1c1b;
    justify-content: space-evenly;
    gap: 50px;
    padding: 5%;
    align-items: center;
    padding: 0.5% 0 1% 0%;
	flex-wrap: wrap;

	@media (max-width: 767px) {
		justify-content: space-between;
		gap: 8px;
		padding: 8px 12px;
		/* Esconde o primeiro grupo de links no mobile para simplificar o header */
		nav:nth-of-type(1) {
			display: none;
		}
	}
`

export const Nav = styled.nav`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;

	@media (max-width: 767px) {
		gap: 8px;
	}
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

	@media (max-width: 767px) {
		width: 36px;
	}
`;

export const LogoHeader = styled.img`
    width: 6%; /* Define um tamanho fixo */
    height: auto;
    cursor: pointer;

	@media (max-width: 767px) {
		width: 120px;
	}
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

	@media (max-width: 767px) {
		width: 80px;
		height: 32px;
		font-size: 14px;
	}
 
`

export const MenuButton = styled.button`
	display: none;
	position: relative;
	width: 36px;
	height: 28px;
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;

	@media (max-width: 767px) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	/* Barras do hamburger */
	span, &:before, &:after {
		content: "";
		position: absolute;
		width: 24px;
		height: 2px;
		background: #fff;
		border-radius: 2px;
		transition: transform .2s ease, opacity .2s ease;
	}

	span { top: 50%; transform: translateY(-50%); }
	&:before { top: 7px; }
	&:after { bottom: 7px; }
`

export const DrawerOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.4);
	opacity: ${(props) => (props.open ? 1 : 0)};
	pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
	transition: opacity .2s ease;
	z-index: 998;

	@media (min-width: 768px) {
		display: none;
	}
`

export const DrawerPanel = styled.aside`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 75vw;
	max-width: 320px;
	background: #1c1c1b;
	box-shadow: -8px 0 20px rgba(0,0,0,0.2);
	transform: translateX(${(props) => (props.open ? '0' : '100%')});
	transition: transform .25s ease;
	z-index: 999;
	padding: 20px 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 768px) {
		display: none;
	}
`