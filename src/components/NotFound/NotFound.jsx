import styles from "./notFound.module.scss";

const NotFound = ({ text }) => {
  return (
    <div className={styles.notfound}>
      <p>{text}</p>
    </div>
  );
};
export default NotFound;
