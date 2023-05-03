import React, { useEffect } from "react";
import { InfoSecFeedback } from "../../components";
import { homeObjOne } from "./Data";
const Feedback = () => {
	useEffect(() => {
		document.title = "Feedback - Noor - Coffee & Tea";
	}, []);
	return <>{<InfoSecFeedback {...homeObjOne} />}</>;
};

export default Feedback;
