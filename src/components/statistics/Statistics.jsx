import css from './statistics.module.css';
import { getRateColor } from 'components/getratecolor';

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
