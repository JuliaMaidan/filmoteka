import { BsPlusLg, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";

const Buttons = ({ id, addToFavorites, addToWatchingList }) => {
  return (
    <div className={styles.btns_wrapper}>
      <button className={styles.btn} onClick={() => addToWatchingList(id)}>
        <BsPlusLg className={styles.btn__svg} />
      </button>
      <button className={styles.btn} onClick={() => addToFavorites(id)}>
        <AiOutlineHeart className={styles.btn__svg} />
      </button>
      <button className={styles.btn}>
        <Link to={`/movie/${id}`}>
          <BsThreeDots className={styles.btn__svg} />
        </Link>
      </button>
    </div>
  );
};

export default Buttons;
