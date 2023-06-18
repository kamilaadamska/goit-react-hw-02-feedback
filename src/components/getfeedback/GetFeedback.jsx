const { Component } = require('react');

class GetFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const rating = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        {rating.map((rate, index) => (
          <button type="button" key={index}>
            {rate}
          </button>
        ))}

        <h2>Statistics</h2>
        <span>
          {rating[0]}: {good}
        </span>
        <span>
          {rating[1]}: {neutral}
        </span>
        <span>
          {rating[2]}: {bad}
        </span>
      </>
    );
  }
}

export default GetFeedback;
