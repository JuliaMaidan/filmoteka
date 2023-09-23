import { useParams } from 'react-router-dom';
import * as React from 'react';
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
import Loader from '../components/Loader/Loader';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import image from '../images/bg/bg.png';
import { useSpring, animated } from '@react-spring/web';
import styles from '../components/styled/aboutMovie.module.scss';

const AboutMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const [similar, setSimilar] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const handleClose = () => setOpen(false);

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

  const handleAddToWatchingList = () => {
    const resultMessage = addToWatchingList(Number(id));
    setMessage(resultMessage);
    setOpen(true);
  };

  const handleAddToFavorites = () => {
    const resultMessage = addToFavorites(Number(id));
    setMessage(resultMessage);
    setOpen(true);
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

  let similarMovies = 0;
  if (767 < windowWidth && windowWidth < 1400) {
    similarMovies = similar.slice(0, 5);
  } else {
    similarMovies = similar.slice(0, 6);
  }
  console.log(similarMovies);

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
              {budget > 0 && <p className={styles.budget}>Budget: {budget}$</p>}
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
                    onClick={() => handleAddToWatchingList()}
                    data-tooltip="Add to watch list"
                  >
                    <BsPlusLg className={styles.btn__svg} />
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => handleAddToFavorites()}
                    data-tooltip="Add to favorites"
                  >
                    <AiOutlineHeart className={styles.btn__svg} />
                  </button>
                </div>
                <Modal
                  aria-labelledby="spring-modal-title"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: StyledBackdrop }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <h2 className={styles.text} id="spring-modal-title">
                        {message}
                      </h2>
                      <img className={styles.img} src={image} alt="xx" />
                    </Box>
                  </Fade>
                </Modal>
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
        <p className={styles.similar__title}>Similar movies</p>
        {similarMovies.length > 0 ? (
          <PostersList movies={similarMovies} />
        ) : (
          <p className="notfound_text">We don't have any similar movies.</p>
        )}
      </div>
    </div>
  );
};

export default AboutMovie;

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = theme => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 240,
  borderRadius: '12px',
  padding: '10px 26px',
  // backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  // backgroundColor: '#fdd5fc',
  background:
    'linear-gradient(90deg, rgba(110,60,143,1) 0%, rgba(141,106,184,1) 64%, rgba(113,122,190,1) 100%)',
  boxShadow: 16,
  display: 'flex',
  gap: '14px',
  alignItems: 'center',
});
