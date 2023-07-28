import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo/cinema.png';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import styles from './header.module.scss';

const Header = () => {
  const isMobile = window.innerWidth < 1400;

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.logo}>
          <img
            className={styles.logo__img}
            src={logo}
            alt="logo"
            width="60px"
          />
          <Link className={styles.logo__link} to="/">
            Filmoteka
          </Link>
        </div>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <nav className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/search"
            >
              Search
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/favorite"
              end
            >
              Favorite
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/watchlist"
            >
              My list
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
