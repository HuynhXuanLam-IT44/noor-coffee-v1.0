import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "Source Sans Pro", sans-serif;
	}

	a, a:hover, a:focus, a:active {
      text-decoration: none;
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;

	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	z-index: 1;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;

		overflow-x: hidden;
	} ;
`;

export const Button = styled.button`
	background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
	color: #fff;

	padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	border-radius: 4px;
	white-space: nowrap;

	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		background: #fff;
		background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
		transition: all 0.3s ease-out;
	}

	&:disabled {
		opacity: 0.5;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export default GlobalStyle;
