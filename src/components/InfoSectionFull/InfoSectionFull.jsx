import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../GlobalStyles";
import {
	InfoSec,
	InfoRowCenter,
	TextWrapper,
	Heading,
	Subtitle,
} from "./InfoSectionFull.elements";
const InfoSectionFull = ({
	lightTopLine,
	lightText,
	headline,
	lightTextDesc,
	description,
	primary,
	urlLinkBtn,
	buttonLabel,
	urlImg,
}) => {
	return (
		<>
			<InfoSec urlImg={urlImg}>
				<Container>
					<InfoRowCenter>
						<TextWrapper>
							<Heading lightText={lightText}>{headline}</Heading>
							<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
							<Link to={urlLinkBtn}>
								<Button big fontBig primary={primary}>
									{buttonLabel}
								</Button>
							</Link>
						</TextWrapper>
					</InfoRowCenter>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSectionFull;
