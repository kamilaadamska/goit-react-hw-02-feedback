import { Component } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import css from './app.module.css';
import { useState } from 'react';

export const App = () => {
  const [feedbackOptions, setFeedbackOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedbackOptions;

  const countEveryOption = option => {
    setFeedbackOptions(prevFeedbackOptions => ({
      ...prevFeedbackOptions,
      [option]: prevFeedbackOptions[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) return 0;
    return Math.floor((good * 100) / total);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={countEveryOption}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
