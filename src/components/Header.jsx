import IMAGES from "../assets";
import { Link } from "react-router-dom";
import "./CSS/Header.css";
import COMPONENTS from "../components";

const Header = () => {
	return (
		<header className="header">
			<div className="header-title">
				<Link to="/"><img className="header-image" src={IMAGES.Logo} alt="jk377y logo"></img></Link>
				<h2 className="title">Tutorials with James</h2>
			</div>
			<COMPONENTS.Navbar />
		</header>
	);
};
export default Header;