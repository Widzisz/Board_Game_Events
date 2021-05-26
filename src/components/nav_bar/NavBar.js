import './nav_bar.scss';
import LogoImage from '../../Images/Logo.png';
import LogoUserImage from '../../Images/LogoUser.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <nav className="nav">
            <Link to="/">
                <img className="logo" src={LogoImage} alt="logo" />
            </Link>
            <ul className="nav-ul">
                <Link style={navStyle} to="/create-event">
                    <li className="nav-li">Create New Event</li>
                </Link>
            </ul>
            <Link to="user-profile">
                <img className="logo-user" src={LogoUserImage} alt="logo user" />
            </Link>
        </nav>
    );
};

export default NavBar;
