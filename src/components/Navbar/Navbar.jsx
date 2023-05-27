import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <ul id="nav-bar-lg-screen" className="nav-bar-lg-screen">
                <li><Link to="/" className="nav-bar-link">HOME</Link></li>
                <li><Link to='/lessons' className="nav-bar-link">LESSONS ▼ </Link>
                    <ul className="nav-dropdown">
                        <li><Link to="/lessons/algorithms" className="nav-bar-link">Algorithms</Link></li>
                        <li><Link to="/lessons/thinkers" className="nav-bar-link">Thinkers</Link></li>
                    </ul>
                </li>
                <li><Link to="/contact" className="nav-bar-link">CONTACT</Link></li>
            </ul>
        </>
    );
};
export default Navbar;