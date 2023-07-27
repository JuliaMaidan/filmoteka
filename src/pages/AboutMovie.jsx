import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getMovieDetails, getSimilar } from '../services/fetchMovies';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsPlusLg, BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { addToFavorites, addToWatchingList } from '../services/buttonsLogic';
import Cast from '../components/Cast/Cast';
import Trailers from '../components/Trailers/Trailers';
import Reviews from '../components/Reviews/Reviews';
import PostersList from '../components/PostersList/PostersList';
import styles from '../components/styled/aboutMovie.module.scss';
import Loader from '../components/Loader/Loader';

const AboutMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        console.log('Помилка при отриманні інформації про фільм:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        setIsLoading(true);
        const similar = await getSimilar(id);
        setSimilar(similar.results);
        console.log(similar.results);
        setIsLoading(false);
      } catch (error) {
        console.logh(error);
      }
    };
    fetchSimilar();
  }, [id]);

  const handlePlayButtonClick = () => {
    videoRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const {
    backdrop_path,
    genres,
    overview,
    poster_path,
    production_countries,
    release_date,
    runtime,
    tagline,
    title,
    vote_average,
    budget,
  } = movie;

  if (isLoading) {
    return <Loader />;
  }
  const url = `https://image.tmdb.org/t/p/w780/`;
  const date = release_date;
  const year = date.split('-')[0];

  const releaseDate = release_date;
  const parts = releaseDate.split('-');
  const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

  const minutes = runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours}h ${remainingMinutes}m`;

  const rating = (vote_average * 10).toFixed();

  return (
    <div>
      {isLoading && <Loader />}
      <div
        className={styles.container}
        style={{
          backgroundImage: [
            'radial-gradient(circle, rgba(144,135,152,0.61) 0%, rgba(144,135,152,0.5) 100%)',
            `url(${url}${backdrop_path})`,
          ],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.backdrop}>
          <div className={styles.backdrop_wrapper}>
            <div>
              <img
                className={styles.poster}
                src={`${url}${poster_path}`}
                alt=""
              />
              <p className={styles.budget}>Budget: {budget}$</p>
            </div>
            <div className={styles.info_wrapper}>
              <p className={styles.title}>
                {title} ({year})
              </p>
              <div className={styles.date_wrapper}>
                <p className={styles.date}>{formattedDate}</p>
                <p className={styles.runtime}>{formattedTime}</p>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.circle}>
                  <CircularProgressbar
                    value={rating}
                    text={`${rating}%`}
                    styles={buildStyles({
                      pathColor: '#f24b88f8',
                      textColor: '#f24b88f8',
                    })}
                  />
                </div>
                <p className={styles.rating}>Vote rating</p>
                <button className={styles.play} onClick={handlePlayButtonClick}>
                  <BsFillPlayFill className={styles.play_svg} />
                  Trailer
                </button>
                <div className={styles.btns_wrapper}>
                  <button
                    className={styles.btn}
                    onClick={() => addToWatchingList(Number(id))}
                  >
                    <BsPlusLg className={styles.btn__svg} />
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => addToFavorites(Number(id))}
                  >
                    <AiOutlineHeart className={styles.btn__svg} />
                  </button>
                </div>
              </div>
              <i className={styles.tagline}>{tagline}</i>
              <p className={styles.desc}>Overview:</p>
              <p className={styles.overview}>{overview}</p>
              <p className={styles.desc}>Genres:</p>
              <ul className={styles.genres}>
                {genres.map(({ id, name }) => (
                  <li className={styles.genres__item} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
              <p className={styles.desc}>Production countries</p>
              <ul className={styles.genres}>
                {production_countries.map(({ name }) => (
                  <li className={styles.genres__item} key={name}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Cast id={id} />
      <div ref={videoRef}>
        <Trailers id={id} />
      </div>
      <Reviews id={id} />
      <div className={styles.similar}>
        <p className={styles.title}>Similar movies</p>
        <PostersList movies={similar.slice(0, 6)} />
      </div>
    </div>
  );
};

export default AboutMovie;
