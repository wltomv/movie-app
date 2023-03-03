import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.scss';

type LinkProps = {
    display: string;
    path: string;
};

const navLinks: LinkProps[] = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },

    {
        display: 'TV Series',
        path: '/tv',
    },
];

function Header() {
    const { pathname } = useLocation();
    const headerRef = useRef<HTMLDivElement>(document.createElement('div'));

    const active = navLinks.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };

        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Movies</Link>
                </div>
                <ul className="header__nav">
                    {navLinks.map((e, i) => (
                        <li
                            key={`l_${e.display}`}
                            className={`${i === active ? 'active' : ''}`}
                        >
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
