import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__rights}>© 2023 Copyright: Julia Maidan</p>
        {/* <a
          className={styles.footer__link}
          href="https://www.linkedin.com/in/julia-maidan/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Linkedin
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
