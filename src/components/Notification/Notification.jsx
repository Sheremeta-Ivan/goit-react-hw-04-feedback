import React from 'react';

import propTypes from 'prop-types';

const Notification = ({ message }) => (
  <h2 className="text-3xl font-semibold text-gray-900">{message + ` :(`} </h2>
);

Notification.prototype = {
  message: propTypes.string.isRequired,
};

export default Notification;
