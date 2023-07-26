import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        {/* <h1 className={styles.hero__title}>Welcome to movies world</h1> */}
        <p className={styles.hero__desc}>
          {/* We offer a captivating movie overview, providing a diverse collection
          of films to explore. With an extensive selection of genres, you can
          easily find tour favorite movies. */}
          Enjoy an immersive experience as you browse through detailed synopses,
          cast information, and trailers. Stay up-to-date with the latest
          releases and discover hidden gems. Start your cinematic journey today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
