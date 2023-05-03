import React, { useEffect } from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";
const Blog = () => {
	useEffect(() => {
		document.title = "Blog - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default Blog;
