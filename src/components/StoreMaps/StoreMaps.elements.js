import styled from "styled-components";

export const InfoSec = styled.div`
	color: #fff;
	padding: 80px 0;
	background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
	/* padding: 0 5px 5px 5px; */
	/* margin: 0 -15px -15px -15px; */
	align-items: center;

	display: flex;
	flex-wrap: wrap;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

	@media screen and (max-width: 768px) {
		padding-bottom: 40px;
	}
`;

export const InfoColumn = styled.div`
	max-width: 50%;

	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;

	flex: 1;
	flex-basis: 50%;

	@media screen and (max-width: 768px) {
		max-width: 100%;

		display: flex;
		justify-content: center;
		flex-basis: 100%;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;

	padding-top: 0;
	padding-bottom: 60px;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`;

export const TopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};

	margin-bottom: 16px;

	font-size: 18px;
	font-weight: 700;
	letter-spacing: 1.4px;
	line-height: 16px;
`;

export const Heading = styled.h1`
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};

	margin-bottom: 24px;

	font-size: 48px;
	font-weight: 600;
	line-height: 1.1;
`;

export const Subtitle = styled.p`
	color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};

	margin-bottom: 10px;

	max-width: 440px;

	font-size: 18px;
	line-height: 24px;
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;

	max-width: 100%;
	max-height: 500px;

	display: inline-block;
	vertical-align: middle;
`;
