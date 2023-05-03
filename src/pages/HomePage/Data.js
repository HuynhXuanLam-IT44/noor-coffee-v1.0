export const hero = {
	primary: true,
	lightTopLine: true,
	lightText: true,
	lightTextDesc: true,
	headline: "Noor ",
	description: "Coffee & Tea",
	buttonLabel: "Sản phẩm",
	urlLinkBtn: "/products",
	urlImg: require("../../assets/img/anh-bia.webp"),
};

export const feedback = {
	primary: true,
	lightBg: false,
	lightTopLine: false,
	lightText: true,
	lightTextDesc: true,
	topLine: "Noor Coffee & Tea",
	headline: "Đánh giá dịch vụ của NOOR.",
	description:
		"Mỗi lượt góp ý của bạn sẽ giúp cho NOOR cải thiện dịch vụ để phục vụ bạn tốt hơn nữa!",
	buttonLabel: "Đánh giá",
	urlLinkBtn: "/feedback",
	imgStart: true,
	img: require("../../assets/img/feedback.svg"),
	alt: "feedback",
	start: "",
};

export const special = {
	lightBg: false,
	lightText: true,
	lightTextCard: false,
	buttonLabel: "Chi tiết",
	productList: {
		id: "special",
		headlineName: "menu",
		headlineBtn: true,
		headlineButtonName: "XEM THÊM TẤT CẢ SẢN PHẨM",
		products: [
			{
				cardTitle: "Cà phê Noor",
				img: require("../../assets/img/products/cafe/cf-que.jpg"),
				description: "25.000Đ",

				urlLinkBtn: "/products",
				newProduct: true,
				trend: true,
			},
			{
				cardTitle: "Trà sen vàng",
				img: require("../../assets/img/products/tea/tea-sen-vang.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				cardTitle: "trà atiso macchiato",
				img: require("../../assets/img/products/macchiato/macchiato-atiso.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				newProduct: true,
			},
			{
				cardTitle: "Trà thạch vải",
				img: require("../../assets/img/products/tea/tea-thach-vai.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				cardTitle: "trà đào chanh sả",
				img: require("../../assets/img/products/tea/tea-tra-dao.jpg"),
				description: "30.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
			{
				cardTitle: "Matcha macchiato",
				img: require("../../assets/img/products/macchiato/macchiato-matcha.jpg"),
				description: "37.000Đ",

				urlLinkBtn: "/products",
				trend: true,
			},
		],
	},
};
