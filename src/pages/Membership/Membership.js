import React, { useEffect } from "react";
import { InfoSecRegisterMember } from "../../components";
import { homeObjOne } from "./Data";
const Membership = () => {
	useEffect(() => {
		document.title = "Membership - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<InfoSecRegisterMember {...homeObjOne} />
		</>
	);
};

export default Membership;
