import css from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <span
        className={css.rateStatistic}
        style={{
          color: getRateColor('good'),
        }}
      >
        Good: {good}
      </span>
      <span
        className={css.rateStatistic}
        style={{
          color: getRateColor('neutral'),
        }}
      >
        Neutral: {neutral}
      </span>
      <span
        className={css.rateStatistic}
        style={{
          color: getRateColor('bad'),
        }}
      >
        Bad: {bad}
      </span>
      <span className={css.totalStatistic}>Total: {total}</span>
      <span className={css.totalStatistic}>
        Positive rates: {positivePercentage}%
      </span>
    </>
  );
};

const getRateColor = rate => {
  switch (rate) {
    case 'good':
      return '#469A49';
    case 'neutral':
      return '#FAD02C';
    case 'bad':
      return '#E12A2A';
    default:
      throw new Error(`Rating type is not recognized.`);
  }
};
