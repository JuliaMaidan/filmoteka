import styles from "./loader.module.scss";

const Loader = () => {
  return (
    // <div className={styles.loader}>
    //   <div className={styles.loader__wrapper}>
    //     <div className={styles.loader__filmstrip}></div>
    //     <p className={styles.loader__text}>loading</p>
    //   </div>
    // </div>
    // <div className={styles.wrap}>
    //   <div className={styles.loading}>
    //     <div className={styles.bounceball}></div>
    //     <div className={styles.text}>NOW LOADING</div>
    //   </div>
    // </div>
    <div className={styles.wrapper}>
      <div className={styles.box}>
        {/* <span className={styles.loader}>Load&nbsp;ng</span>
         */}
        <span className={styles.loader}></span>
      </div>
    </div>
  );
};

export default Loader;
