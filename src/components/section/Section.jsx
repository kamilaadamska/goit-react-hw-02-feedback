import css from './section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.box}>
      <h2 className={css.header}>{title}</h2>
      {children}
    </section>
  );
};
