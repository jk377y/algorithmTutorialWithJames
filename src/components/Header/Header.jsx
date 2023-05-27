import IMAGES from "../../assets/";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
	return (
		<header className="header">
			<div className="header-title">
				<Link to="/"><img className="header-image" src={IMAGES.Logo} alt="jk377y logo"></img></Link>
				<h2 className="title">Tutorials with James</h2>
			</div>
			<Navbar />
		</header>
	);
};
export default Header;