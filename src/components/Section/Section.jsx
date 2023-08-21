import React from 'react';
import propTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section className="text-center ">
      <h2 className="max-w-lg text-5xl font-semibold leading-loose text-gray-900 ml-auto mr-auto mt-0 mb-0">
        {title}
      </h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
export default Section;
