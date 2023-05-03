import React from "react";
import logoImg from "../../assets/img/logo-web-white.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
	FooterContainer,
	LogoImg,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
	WebsiteRightsText,
	Tins,
} from "./Footer.elements";
const Footer = () => {
	return (
		<FooterContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<LogoImg src={logoImg} alt="logo" />
					</SocialLogo>
					<WebsiteRights>
						<WebsiteRightsText>
							Copyright © 2020 Noor Coffee & Tea
						</WebsiteRightsText>
						<WebsiteRightsText>
							Design by :{" "}
							<Tins
								href="http://tinspham.info/"
								target="_blank"
								aria-label="Facebook"
							>
								Tins
							</Tins>
						</WebsiteRightsText>
					</WebsiteRights>
					<SocialIcons>
						<SocialIconLink
							href="https://facebook.com/noorcoffeedn"
							target="_blank"
							aria-label="Facebook"
						>
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink
							href="https://instagram.com/noorcoffeedn"
							target="_blank"
							aria-label="Facebook"
						>
							<FaInstagram />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
