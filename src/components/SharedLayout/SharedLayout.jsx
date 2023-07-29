import { Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import styles from './sharedLayout.module.scss';
import { SlArrowUp } from 'react-icons/sl';
import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';

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
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      {isVisible && (
        <button type="button" className={styles.up} onClick={scrollToTop}>
          <SlArrowUp />
        </button>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default SharedLayout;
