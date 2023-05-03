import React, { useEffect } from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";
const About = () => {
	useEffect(() => {
		document.title = "About us - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default About;
