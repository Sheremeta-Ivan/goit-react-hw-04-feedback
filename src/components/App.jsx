import React, { useState, useEffect } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedbackData, setFeedbackData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const feedbackData = JSON.parse(localStorage.getItem('feedbackData'));

    if (feedbackData) {
      setFeedbackData(feedbackData);
    }
  }, []);

  useEffect(() => {
    const { good, neutral, bad } = feedbackData;

    if (good || neutral || bad) {
      localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
    }
  }, [feedbackData]);

  const handleFeedback = feedback => () => {
    setFeedbackData(prevFeedback => ({
      ...prevFeedback,
      [feedback]: prevFeedback[feedback] + 1,
    }));
  };

  const handleReset = () => {
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem('feedbackData');
  };

  const { good, neutral, bad } = feedbackData;
  const total = good + neutral + bad;
  const positiveFeedback = Math.round((good / total) * 100);

  return (
    <div className="container mx-auto border-solid border-4 mt-8 rounded-md border-gray-500 shadow-2xl p-6 bg-blue-300 w-1/2">
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={Object.keys(feedbackData)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
            <button
              type="button"
              onClick={handleReset}
              className="text-white bg-amber-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-9 py-4 mr-4 mb-4 dark:bg-amber-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-8"
            >
              Reset Feedback
            </button>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
