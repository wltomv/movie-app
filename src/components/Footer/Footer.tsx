import { Link } from 'react-router-dom';
import bg from '../../assets/footer.png';
import logo from '../../assets/logo.png';

import './Footer.scss';

const links = [
    'Home',
    'Contact us',
    'Term of services',
    'About us',
    'Live',
    'FAQ',
    'Premium',
    'Pravacy policy',
    'You must watch',
    'Recent release',
    'Top IMDB',
];

function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Movies and TV</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    {links.map((link) => (
                        <Link to="/" key={link}>
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
