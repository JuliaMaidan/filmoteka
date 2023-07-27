import styles from './hero.module.scss';

const Hero = () => {
  let text = '';

  if (window.innerWidth < 768) {
    text = 'Stay up-to-date with the latest releases and discover hidden gems.';
  } else if (window.innerWidth < 1400) {
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
