import styled from "styled-components";
import { Link } from "react-router-dom";

export const Headline = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
	flex-wrap: wrap;
`;

export const HeadlineTitle = styled.h1`
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	text-transform: uppercase;

	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const HeadlineBtn = styled.div`
	@media screen and (max-width: 500px) {
		width: 100%;
		height: 120px;

		display: flex;
		justify-content: center;
		align-item: center;
	}
`;

export const HeadlineBtnLink = styled(Link)`
	height: 100%;
	width: 100%;
	padding: 8px 16px;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	text-decoration: none;
	border: none;
	outline: none;
`;

export const Products = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

	margin-bottom: 50px;
`;
