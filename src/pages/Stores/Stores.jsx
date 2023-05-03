import React, { useEffect } from "react";
import { StoreMaps } from "../../components";
import { Maps, Grab, Loship } from "./Data";
const Stores = () => {
	useEffect(() => {
		document.title = "Our stores - Noor - Coffee & Tea";
	}, []);
	return (
		<>
			<StoreMaps {...Maps} />
			<StoreMaps {...Grab} />
			<StoreMaps {...Loship} />
		</>
	);
};

export default Stores;
