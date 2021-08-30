import React from 'react';
import {
    Link, useLocation
  } from "react-router-dom";
import styles from './Header.module.scss';

function Header() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <nav >
            <ul className={styles.header}>
                <li className={styles['header__logo']}>
                    <Link to='/'>
                        <img src="https://www.squadhelp.com/img/logo.png" alt="Company logo" />
                    </Link>
                </li>
                <li className={styles['header__button_authentication']}>
                   {
                    location.pathname === '/login'? 
                   <Link to='/signup'>Signup</Link> :
                   <Link to='/login'>Login</Link>
                   }
                </li>
            </ul>
        </nav>
    )
}

export default Header;
