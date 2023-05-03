import React, { useEffect } from "react";
const Loship = () => {
	useEffect(() => {
		document.title = "Our stores - Noor - Coffee & Tea";
		window.location = "https://loship.vn/nocaphe";
	}, []);
	return <></>;
};

export default Loship;
