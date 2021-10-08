import React from "react";
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const cn = require('classnames');

export const Button = ({ children, icon = 'none', appearance = 'main', className, size }) => {
  return (
    <button className={cn(styles.button, className, {
      [styles.secondary]: appearance === 'secondary',
      [styles.small]: size === 'small',
    })}>
      {icon !== 'none' &&
        <img className={styles.icon} src="/setting.svg" />}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.element,
  icon: PropTypes.string,
  appearance: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
}