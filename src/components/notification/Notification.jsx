import css from './notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h2 className={css.info}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
