import React from 'react';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className="max-w-md space-y-1 text-gray-800 list-inside font-bold text-3xl ml-auto mr-auto mt-0 mb-0">
      <li className="text-green-500">Good: {good}</li>
      <li className="">Neutral: {neutral} </li>
      <li className="text-red-500">Bad: {bad}</li>
      <li className="text-blue-500">Total: {total}</li>
      <li className="text-yellow-500">
        Positive feedback: {positiveFeedback}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positiveFeedback: propTypes.number.isRequired,
};
export default Statistics;
