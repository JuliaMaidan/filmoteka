import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__name}>made by JuliaMaidan</p>
        <p className={styles.footer__date}>© 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
