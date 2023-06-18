import css from './notification.module.css';

export const Notification = ({ message }) => {
  return <h2 className={css.info}>{message}</h2>;
};
