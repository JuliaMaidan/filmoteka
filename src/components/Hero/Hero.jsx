import { useEffect, useState } from 'react';
import styles from './hero.module.scss';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let text = '';

  if (windowWidth < 768) {
    text = 'Stay up-to-date with the latest releases and discover hidden gems.';
  } else if (windowWidth < 1400) {
    text =
      'Stay up-to-date with the latest releases and discover hidden gems. Start your cinematic journey today!';
  } else {
    text =
      'Enjoy an immersive experience as you browse through detailed synopses, cast information, and trailers. Stay up-to-date with the latest releases and discover hidden gems. Start your cinematic journey today!';
  }
  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <p className={styles.hero__desc}>{text}</p>
      </div>
    </div>
  );
};

export default Hero;
