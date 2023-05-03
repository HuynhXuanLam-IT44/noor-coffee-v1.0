import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product/Product";
import {
	Products,
	Headline,
	HeadlineTitle,
	HeadlineBtn,
	HeadlineBtnLink,
} from "./ProductList.elements";
import { Button } from "../../../GlobalStyles";
const ProductList = ({
	id,
	lightText,
	lightTextCard,
	buttonLabel,
	productList,
	headlineName,
	headlineBtn,
	headlineButtonName,
}) => {
	const myRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (myRef && location.hash.includes(`${id}`)) {
			myRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
		}
	}, [myRef, location.hash, id]);

	return (
		<div id={id} ref={myRef}>
			<Headline>
				<HeadlineTitle lightText={lightText}>{headlineName}</HeadlineTitle>
				{headlineBtn ? (
					<HeadlineBtn>
						<HeadlineBtnLink to="/products">
							<Button primary fontBig>
								{headlineButtonName}
							</Button>
						</HeadlineBtnLink>
					</HeadlineBtn>
				) : null}
			</Headline>
			<Products>
				{productList.map((product, index) => {
					return (
						<Product
							key={index}
							lightTextCard={lightTextCard}
							cardTitle={product.cardTitle}
							img={product.img}
							description={product.description}
							urlLinkBtn={product.urlLinkBtn}
							buttonLabel={buttonLabel}
							trend={product.trend}
							newProduct={product.newProduct}
						/>
					);
				})}
			</Products>
		</div>
	);
};

export default ProductList;
