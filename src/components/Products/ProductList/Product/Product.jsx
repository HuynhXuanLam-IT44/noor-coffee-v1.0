import React from "react";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

import { FaAngellist } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import {
	Card,
	CardDescription,
	CardImage,
	Img,
	TrendLabel,
	NewLabel,
	CardTitle,
	ButtonCard,
} from "./Product.elements";
const Product = ({
	lightTextCard,
	cardTitle,
	img,
	description,
	urlLinkBtn,
	buttonLabel,
	trend,
	newProduct,
}) => {
	return (
		<>
			<Card>
				<CardImage>
					<Img effect="blur" src={img} />
					{newProduct && (
						<NewLabel>
							new <FaAngellist />
						</NewLabel>
					)}
					{trend && (
						<TrendLabel>
							<AiOutlineLike /> Bán chạy nhất
						</TrendLabel>
					)}
				</CardImage>
				<CardTitle lightTextCard={lightTextCard}>{cardTitle}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<Link to={urlLinkBtn}>
					<ButtonCard>{buttonLabel}</ButtonCard>
				</Link>
			</Card>
		</>
	);
};

export default Product;
