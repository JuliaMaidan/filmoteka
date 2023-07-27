import { useState, useEffect } from 'react';
import { getMovieVideos } from '../../services/fetchMovies';
import ReactPlayer from 'react-player';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import styles from './trailers.module.scss';

const Trailers = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const fetchMovieVideos = async () => {
      try {
        const movieVideos = await getMovieVideos(id);
        setVideos(movieVideos.results);
      } catch (error) {
        console.log('Помилка при отриманні відео для фільму:', error);
      }
    };
    fetchMovieVideos();
  }, [id]);

  return (
    <div className={styles.video__wrapper}>
      <p className={styles.video__title}>Trailers</p>
      <ul className={styles.video}>
        {videos.map(({ id, key, name }, index) => (
          <li
            key={id}
            // className={index === currentVideoIndex ? styles.active : ""}
            className={styles.video__item}
          >
            {index === currentVideoIndex && (
              <>
                {/* <p className={styles.video__name}>{name}</p> */}
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${key}`}
                  controls
                  width="100%"
                  height="100%"
                  className={styles.video__player}
                />
              </>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.video__btns}>
        <button
          className={styles.video__btn}
          onClick={() =>
            setCurrentVideoIndex(prevIndex =>
              prevIndex > 0 ? prevIndex - 1 : videos.length - 1
            )
          }
        >
          <AiOutlineLeft size={36} className={styles.video__svg} />
        </button>
        <button
          className={styles.video__btn}
          onClick={() =>
            setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length)
          }
        >
          <AiOutlineRight size={36} className={styles.video__svg} />
        </button>
      </div>
    </div>
  );
};

export default Trailers;
