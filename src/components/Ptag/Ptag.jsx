import React from 'react';
import PropTypes from 'prop-types';

const cn = require('classnames');

import styles from './Ptag.module.css';

export const Ptag = ({ children, className, ...props }) => {
  return (
    <p className={cn(styles.main, className,)}
      {...props}
    >
      { children }
    </p>
  )
}

Ptag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}
