import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../../../../GlobalStyles";
export const Card = styled.div`
	height: auto;

	margin: 5px;
	padding: 16px;

	background-color: rgba(255, 255, 255, 0.95);
	border-radius: 10px;

	text-align: center;

	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(1, 1fr);
`;

export const CardTitle = styled.div`
	color: ${({ lightTextCard }) => (lightTextCard ? "#f7f8fa" : "#1c2237")};

	font-size: 24px;
	font-weight: bold;

	text-transform: uppercase;
	text-align: left;
`;

export const CardImage = styled.div`
	position: relative;

	max-width: 100%;
	max-height: 100%;

	border-radius: 5px;
`;

export const Img = styled(LazyLoadImage)`
	padding-right: 0;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 5px;

	vertical-align: middle;
	display: inline-block;

	max-width: 100%;
	max-height: 500px;
`;

export const TrendLabel = styled.span`
	content: "";
	color: #fff;
	background-color: #ec8b38;

	padding: 0 7px;

	border-left: 1px solid black;
	border-top: 1px solid black;
	border-bottom: 1px solid black;

	font-size: 18px;
	font-weight: 700;
	line-height: 35px;

	text-align: center;
	text-transform: uppercase;

	position: absolute;
	bottom: 14px;
	right: -16px;
	z-index: 3;
`;

export const NewLabel = styled.span`
	content: "";
	color: #fff;
	background-color: #ee5375;

	padding: 0 7px;

	border-right: 1px solid black;
	border-top: 1px solid black;
	border-bottom: 1px solid black;

	font-size: 18px;
	font-weight: 700;
	line-height: 35px;

	text-align: center;
	text-transform: uppercase;

	position: absolute;
	top: 8px;
	left: -16px;

	z-index: 3;
`;

export const CardDescription = styled.div`
	text-align: left;
	text-transform: uppercase;

	font-size: 30px;
	color: #ec8b38;
`;

export const ButtonCard = styled(Button)`
	width: 100%;
	font-weight: bold;
	font-size: 20px;
	text-transform: uppercase;

	&:hover {
		color: #000;
		box-shadow: 0px 5px 5px #b2bec3;
	}
`;
