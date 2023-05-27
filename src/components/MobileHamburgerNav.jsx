import { Link } from "react-router-dom";
import { useState } from "react";
import IMAGES from "../assets";
import "./CSS/MobileHamburgerNav.css";

const MobileHamburgerNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="nav-mobile-outer-div shadow-frame">
			<button
				className={`hamburgerBtn ${isOpen ? "collapsed" : ""}`}
				aria-label="Toggle Navigation"
				onClick={toggleNav}
			>
				<span className="hamburger"></span>
			</button>
			<div
				id="nav-mobile-menu-div"
				className={`nav-mobile-menu-div ${isOpen ? "show" : ""}`}
			>
				<div className="nav-mobile-menu">
					<div>
						<img src={IMAGES.LogoBig} alt="logo" />
					</div>
					<Link to="/" onClick={toggleNav}>HOME</Link>
					<Link to="/lessons" onClick={toggleNav}>LESSONS</Link>
					<Link to="/contact" onClick={toggleNav}>CONTACT</Link>
				</div>
			</div>
		</div>
	);
};

export default MobileHamburgerNav;