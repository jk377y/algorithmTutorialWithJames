import { Link } from 'react-router-dom';
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        <>
            <ul id="nav-bar-lg-screen" className="nav-bar-lg-screen">
                <li><Link to="/" className="nav-bar-link">HOME</Link></li>
                <li><Link to='/javascript' className="nav-bar-link">JAVASCRIPT ▼ </Link>
                    <ul className="nav-dropdown">
                                <li><Link to="/javascript/algorithms" className="nav-bar-link">Algorithms</Link></li>
                                <li><Link to="/javascript/thinkers" className="nav-bar-link">Thinkers</Link></li>
                    
                    </ul>
                </li>
                <li><Link to='/python' className="nav-bar-link">PYTHON ▼ </Link>
                    <ul className="nav-dropdown">
                                <li><Link to="/python/algorithms" className="nav-bar-link">Algorithms</Link></li>
                                <li><Link to="/python/thinkers" className="nav-bar-link">Thinkers</Link></li>
                    
                    </ul>
                </li>
                <li><Link to="/contact" className="nav-bar-link">CONTACT</Link></li>
            </ul>
        </>
    );
};
export default Navbar;