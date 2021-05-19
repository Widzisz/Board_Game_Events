import './nav_bar.scss';
import LogoImage from '../../Images/Logo.png';
import LogoUserImage from '../../Images/LogoUser.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navStyle = {
        color: 'white',
    };

    return (
        <nav className="nav">
            <Link to="/">
                <img className="logo" src={LogoImage} alt="Logo image" />
            </Link>
            <ul className="nav-ul">
                <Link style={navStyle} to="/createvent">
                    <li>Creat New Event</li>
                </Link>
            </ul>
            <Link to="userprofile">
                <img className="logo-user" src={LogoUserImage} alt="Logo user image" />
            </Link>
        </nav>
    );
};

export default NavBar;
