/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Navbar = ({ toggle, isOpen, variant }) => {
     const isHideNav = !isOpen && variant === 'mobile' ? 'mobile-navbar--hidden' : '';
     const [isHover, setHover] = React.useState(false);
     const closeHover = () => setHover(false);
     const openHover = () => setHover(true);
     const hoverClass = isHover && variant === 'desktop' ? 'desktop-navbar__list--hover' : '';

     const menuItems = [
          { children: 'HOME', to: '/' },
          { children: 'SIGNUP', to: '/signup' },
          { children: 'LOGIN', to: '/login' },
          {
               children: 'MOVIES',
               to: '/movie',
          },
          {
               children: 'TV',
               to: '/tv',
          },
          {
               children: 'Actors',
               to: '/actors-archive',
          },
     ];

     return (
          <div className={`${variant}-navbar ${isHideNav}`} onClick={toggle}>
               <ul className={`${variant}-navbar__list ${hoverClass}`}>
                    {menuItems.map((menuItem) => (
                         <li
                              onMouseOut={closeHover}
                              onMouseLeave={closeHover}
                              onMouseEnter={openHover}
                              key={menuItem.children}
                              className={`${variant}-navbar__item`}>
                              <Link to={menuItem.to} className={`${variant}-navbar__link`}>
                                   {menuItem.children}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default Navbar;
