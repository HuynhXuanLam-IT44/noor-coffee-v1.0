import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 0.5rem 1rem 0.5rem 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SocialMedia = styled.section`
	width: 100%;
	max-width: 1200px;
`;

export const SocialMediaWrap = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: 0.5rem auto 0.5rem auto;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 2rem;

	display: flex;
	justify-self: flex-start;
	align-items: center;

	cursor: pointer;
`;

export const LogoImg = styled.img`
	height: 40px;

	border: 0;
	padding-right: 0;

	display: inline-block;
	vertical-align: middle;
`;

export const WebsiteRights = styled.div`
	margin: 16px 0;

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;
export const WebsiteRightsText = styled.small`
	color: #fff;
	font-size: 1.2rem;
	margin-left: 10px;

	@media screen and (max-width: 820px) {
		&:last-child {
			margin-left: 0px;
		}
	}
`;

export const Tins = styled.a`
	color: #fff;
	text-decoration: none;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

export const SocialIcons = styled.div`
	/* width: 240px; */

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
	margin-left: 10px;
`;
