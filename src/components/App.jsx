import { Component } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import css from './app.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countEveryOption = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) return 0;
    return Math.floor((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countEveryOption}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
