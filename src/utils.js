export function phoneNumber(input) {
	const phoneNo = /^\d{10}$/;
	if (input.value.match(phoneNo)) {
		return true;
	} else {
		alert("Not a valid Phone Number");
		return false;
	}
}

export function getUUID() {
	// eslint gets funny about bitwise
	/* eslint-disable */
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const piece = (Math.random() * 16) | 0;
		const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
		return elem.toString(16);
	});
	/* eslint-enable */
}
