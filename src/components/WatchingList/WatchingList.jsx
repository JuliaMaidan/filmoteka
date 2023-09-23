import { useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { BsInfo } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import image from '../../images/bg/bg.png';
import { useSpring, animated } from '@react-spring/web';
import styles from './watchingList.module.scss';

const WatchingList = ({ movies, onDeleteClick }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleDelete = id => {
    setOpen(true);

    setTimeout(() => {
      onDeleteClick(id);
    }, 1100);
  };

  return (
    <>
      <ul className={styles.mylist}>
        {movies.map(({ id, title, poster_path }) => (
          <li className={styles.mylist__item} key={id}>
            <img
              className={styles.mylist__img}
              src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
              alt={title}
            />
            <p className={styles.mylist__title}>{title}</p>
            <div className={styles.mylist__btns}>
              <button
                className={styles.mylist__btn}
                data-tooltip="Show more info"
              >
                <Link to={`/movie/${id}`}>
                  <BsInfo size={30} className={styles.mylist__svg} />
                </Link>
              </button>
              <button
                className={styles.mylist__btn}
                onClick={() => handleDelete(id)}
                data-tooltip="Delete"
              >
                <AiOutlineDelete size={22} className={styles.mylist__svg} />
              </button>
            </div>
          </li>
        ))}
      </ul>
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
              Movie has been deleted
            </h2>
            <img className={styles.img} src={image} alt="xx" />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default WatchingList;

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

const style = () => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 240,
  borderRadius: '12px',
  padding: '10px 26px',
  background:
    'linear-gradient(90deg, rgba(110,60,143,1) 0%, rgba(141,106,184,1) 64%, rgba(113,122,190,1) 100%)',
  boxShadow: 16,
  display: 'flex',
  gap: '14px',
  alignItems: 'center',
});
