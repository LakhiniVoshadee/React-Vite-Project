import './NavBar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/IMG_E6003.png.jpg';


export function NavBar() {
    return (
        <div className="navbar ">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <img src={logo} alt="MyApp Logo" className="logo-image"/>
                        <p className="logo-text">Lakhini<span>.</span></p>
                    </div>

                    <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className="nav-menu">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/about">About</Link></li>
                        <li><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li><Link  className="nav-link" to="/contact">Contact</Link></li>
                    </ul>

                    <button>
                       <Link to="/login">Sign In</Link>
                    </button>
                </div>
            </nav>
        </div>
    );
}