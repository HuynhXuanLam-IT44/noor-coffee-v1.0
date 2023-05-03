import React, { useEffect } from "react";
import { ProductsComponent } from "../../components";
import { products } from "./Data";
const Products = () => {
	useEffect(() => {
		document.title = "Menu - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<ProductsComponent products={products} />
		</>
	);
};

export default Products;
