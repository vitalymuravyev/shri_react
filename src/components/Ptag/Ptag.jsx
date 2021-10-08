import React from 'react';
import PropTypes from 'prop-types';

// const cn = require('classnames');

import styles from './Ptag.module.css';

export const Ptag = ({ children }) => {
  return (
    <p className={styles.custom}>
      {children}
    </p>
  )
}

Ptag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
}