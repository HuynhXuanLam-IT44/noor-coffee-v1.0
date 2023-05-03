import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavLogo,
	NavLogoImg,
	NavMenu,
	NavItem,
	NavLinks,
} from "./Navbar.elements";
import logoImg from "../../assets/img/logo-web-white.png";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavLogoImg onClick={closeMobileMenu} src={logoImg} alt="logo" />
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/">Trang chủ</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/products">Sản phẩm</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/blog">Tin tức</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/stores">Cửa hàng</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/membership">Thành viên</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/about">Về chúng tôi</NavLinks>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
