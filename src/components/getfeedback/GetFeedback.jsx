import css from './getfeedback.module.css';
const { Component } = require('react');

class GetFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getRateColor = rate => {
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

  render() {
    const rating = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <div className={css.box}>
          <h2 className={css.header}>Please leave feedback</h2>
          {rating.map((rate, index) => (
            <button
              type="button"
              className={css.ratingButtons}
              style={{
                backgroundColor: this.getRateColor(rate),
              }}
              key={index}
            >
              {rate}
            </button>
          ))}
        </div>

        <div className={css.box}>
          <h2 className={css.header}>Statistics</h2>
          <span
            className={css.statistic}
            style={{
              color: this.getRateColor(rating[0]),
            }}
          >
            {rating[0]}: {good}
          </span>
          <span
            className={css.statistic}
            style={{
              color: this.getRateColor(rating[1]),
            }}
          >
            {rating[1]}: {neutral}
          </span>
          <span
            className={css.statistic}
            style={{
              color: this.getRateColor(rating[2]),
            }}
          >
            {rating[2]}: {bad}
          </span>
        </div>
      </div>
    );
  }
}

export default GetFeedback;
