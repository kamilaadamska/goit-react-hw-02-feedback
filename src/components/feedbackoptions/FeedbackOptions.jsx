import { getRateColor } from 'components/getratecolor';
import css from './feedbackoptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            className={css.ratingButtons}
            style={{
              backgroundColor: getRateColor(option),
            }}
            key={index}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
