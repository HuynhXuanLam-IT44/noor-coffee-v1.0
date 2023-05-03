import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box/dist/esnext";
import { Container } from "../../GlobalStyles";
import {
	Background,
	Products,
	Left,
	ButtonItem,
	Menu,
	MenuItem,
	MenuList,
	Right,
	ButtonMobileItem,
	MenuMobile,
	MenuMobileItem,
	MenuMobileList,
} from "./Products.elements";
import ProductList from "./ProductList/ProductList";

const ProductsComponent = ({ products }) => {
	const {
		lightBg,
		lightText,
		lightTextCard,
		buttonLabel,
		productList,
	} = products;

	const [checkMobileWidth, setCheckMobileWidth] = useState(false);
	useEffect(() => {
		if (window.innerWidth <= 500) {
			setCheckMobileWidth(true);
		}
	}, []);

	const productListComponent = (products, index) => (
		<ProductList
			key={index}
			lightText={lightText}
			lightTextCard={lightTextCard}
			buttonLabel={buttonLabel}
			id={products.id}
			headlineName={products.headlineName}
			productList={products.products}
			headlineBtn={products.headlineBtn}
			headlineButtonName={products.headlineButtonName}
		/>
	);

	const mobileComponent = (
		<div>
			<MenuMobile>
				<MenuMobileList>
					{productList.map((item, index) => {
						return (
							<MenuMobileItem key={index}>
								<Link
									to={{
										pathname: "/products",
										hash: `${item.id}`,
									}}
								>
									<ButtonMobileItem>{item.headlineName}</ButtonMobileItem>
								</Link>
							</MenuMobileItem>
						);
					})}
				</MenuMobileList>
			</MenuMobile>
			{productList.map((products, index) => {
				return productListComponent(products, index);
			})}
		</div>
	);

	const mediumScreenComponent = (
		<Products>
			<Left>
				<StickyBox offsetTop={80}>
					<Menu>
						<MenuList>
							{productList.map((item, index) => {
								return (
									<MenuItem key={index}>
										<Link
											to={{
												pathname: "/products",
												hash: `${item.id}`,
											}}
										>
											<ButtonItem>{item.headlineName}</ButtonItem>
										</Link>
									</MenuItem>
								);
							})}
						</MenuList>
					</Menu>
				</StickyBox>
			</Left>
			<Right>
				{productList.map((products, index) => {
					return productListComponent(products, index);
				})}
			</Right>
		</Products>
	);

	return (
		<Background lightBg={lightBg}>
			<Container>
				{checkMobileWidth ? mobileComponent : mediumScreenComponent}
			</Container>
		</Background>
	);
};

export default ProductsComponent;
