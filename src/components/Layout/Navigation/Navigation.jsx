import React, { useEffect, useState } from 'react';
import './Navigation.scss';
import logo from '../../../assets/images/logo_elixir.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import routes from '../../../utils/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UserIcon from '../User/UserIcon';
import UserInfoDropdown from '../User/UserInfoDropdown';

const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showProfileInfo, setShowProfileInfo] = useState(false);
    const [showUserIcon, setShowUserIcon] = useState(true);
    const location = useLocation()

    function topFunction() {
        document.documentElement.scrollTop = 0;
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }

    useEffect(() => {
        setShowMobileMenu(false)
        setShowProfileInfo(false)
    }, [location])

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/ElixirRestaurant/">
                    <img src={logo} alt="Elixir logo" onClick={topFunction} />
                </Link>
                <div
                    className={showMobileMenu ? 'show-mobile-menu' : 'nav-menu'}
                >
                    {Object.values(routes)
                        .filter((element) => element.includeInNav === true)
                        .map((element, index) => (
                            <NavLink
                                key={index + 1}
                                to={element.path}
                                className={({ isActive }) =>
                                    isActive ? 'active' : undefined
                                }
                                onClick={topFunction}
                            >
                                {element.name}
                            </NavLink>
                        ))}
                    {showUserIcon && (
                        <UserIcon
                            show={showProfileInfo}
                            setShow={setShowProfileInfo}
                            showMobileMenu={showMobileMenu}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    )}
                </div>
            </div>
            <div className="mobile-menu-wrapper">
                <FontAwesomeIcon
                    className="mobile-menu-btn"
                    icon={faBars}
                    onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}
                />
                <UserIcon
                    show={showProfileInfo}
                    setShow={setShowProfileInfo}
                    showMobileMenu={showMobileMenu}
                    setShowMobileMenu={setShowMobileMenu}
                    mobileIcon={true}
                />
                {showProfileInfo && (
                    <UserInfoDropdown
                        show={showProfileInfo}
                        setShow={setShowProfileInfo}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navigation;
