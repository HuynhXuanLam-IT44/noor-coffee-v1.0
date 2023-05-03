import React, { useEffect } from "react";
const Grab = () => {
	useEffect(() => {
		document.title = "Our stores - Noor - Coffee & Tea";
		window.location =
			"https://food.grab.com/vn/vi/restaurant/noor-coffee-tea-delivery/5-CZJVRNAAL6TDJJ";
	}, []);
	return <></>;
};

export default Grab;
