import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

export const InfoSec = styled.div`
	color: #fff;
	padding: 80px 0;
	background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
	@media screen and (max-width: 768px) {
		padding: 30px 0;
	}
`;

export const InfoRow = styled.div`
	align-items: center;

	display: flex;
	flex-wrap: wrap;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
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

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
	color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};

	margin: 10px 0 10px 0;

	max-width: 440px;

	font-size: 18px;
	line-height: 24px;
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;

	max-width: 100%;
	max-height: 500px;

	display: inline-block;
	vertical-align: middle;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 450px;
	width: 100%;
`;

export const FormLabel = styled.label`
	line-height: 17px;
	padding: 10px 0 10px 0;
	font-size: 18px;
`;

export const FormInput = styled.input`
	width: 100%;
	font-size: 18px;

	padding: 10px;
	margin-bottom: 10px;
	outline: none;

	background: #333;
	border-radius: 4px;
	border: 0;
	color: #fff;

	&:last-of-type {
		margin-bottom: 20px;
	}
`;

export const FormTextarea = styled.textarea`
	width: 100%;
	min-height: 54px;

	font-size: 18px;

	margin-bottom: 20px;
	padding: 10px;

	border: 0;
	outline: none;

	background: #333;
	border-radius: 4px;
	color: #fff;
`;

export const FormSelect = styled.select`
	width: 100%;
	font-size: 18px;

	padding: 10px;
	margin-bottom: 10px;

	outline: none;

	background: #333;
	border-radius: 4px;
	border: 0;
	color: #fff;
`;

export const FormSelectOption = styled.option``;

export const StarsRating = styled(ReactStars)`
	margin-bottom: 20px;
	outline: none;
	border: none;
`;
