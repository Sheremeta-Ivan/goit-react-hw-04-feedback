import React from 'react';
import propTypes from 'prop-types';
import { createId } from '@paralleldrive/cuid2';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          onClick={onLeaveFeedback(option)}
          key={createId()}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-9 py-4 mr-4 mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
