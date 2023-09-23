import { useState } from 'react';
import * as React from 'react';
import { BsPlusLg, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import styles from './buttons.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import image from '../../images/bg/bg.png';
import { useSpring, animated } from '@react-spring/web';

const Buttons = ({ id, addToFavorites, addToWatchingList }) => {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleAddToFavorites = () => {
    const resultMessage = addToFavorites(id);
    setMessage(resultMessage);
    setOpen(true);
  };

  const handleAddToWatchingList = () => {
    const resultMessage = addToWatchingList(id);
    setMessage(resultMessage);
    setOpen(true);
  };

  return (
    <div className={styles.btns_wrapper}>
      <button
        className={styles.btn}
        onClick={() => handleAddToWatchingList(id)}
        data-tooltip="Add to watch list"
      >
        <BsPlusLg className={styles.btn__svg} />
      </button>
      <button
        className={styles.btn}
        onClick={() => handleAddToFavorites(id)}
        data-tooltip="Add to favorites"
      >
        <AiOutlineHeart className={styles.btn__svg} />
      </button>
      <button className={styles.btn} data-tooltip="Show more info">
        <Link to={`/movie/${id}`}>
          <BsThreeDots className={styles.btn__svg} />
        </Link>
      </button>
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
  );
};

export default Buttons;

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
