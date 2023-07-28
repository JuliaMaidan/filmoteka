import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './mobileMenu.module.scss';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={isMenuOpen ? styles.menu__open : styles.menu}>
      <button onClick={handleMenuToggle} className={styles.menu__btn}>
        {isMenuOpen ? (
          <AiOutlineClose className={styles.menu__svg} size={22} />
        ) : (
          <HiOutlineMenuAlt3 className={styles.menu__svg} size={22} />
        )}
      </button>
      <nav className={styles.nav}>
        <NavLink
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            isActive ? styles.active : styles.nav__link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            isActive ? styles.active : styles.nav__link
          }
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            isActive ? styles.active : styles.nav__link
          }
          to="/search"
        >
          Search
        </NavLink>
        <NavLink
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            isActive ? styles.active : styles.nav__link
          }
          to="/favorite"
        >
          Favorite
        </NavLink>
        <NavLink
          onClick={handleMenuToggle}
          className={({ isActive }) =>
            isActive ? styles.active : styles.nav__link
          }
          to="/watchlist"
        >
          My list
        </NavLink>
      </nav>
    </div>
  );
};
export default MobileMenu;
