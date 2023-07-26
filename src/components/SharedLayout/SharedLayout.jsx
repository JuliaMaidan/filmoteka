import { Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo/cinema.png';
import styles from './sharedLayout.module.scss';
import { SlArrowUp } from 'react-icons/sl';
// import Loader from "../Loader/Loader";

const SharedLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.layout}>
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
              {/* <span>Hub</span> */}
            </Link>
          </div>
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
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
      {isVisible && (
        <button type="button" className={styles.up} onClick={scrollToTop}>
          <SlArrowUp size={20} />
        </button>
      )}
      {/* <Loader /> */}
    </div>
  );
};

export default SharedLayout;
