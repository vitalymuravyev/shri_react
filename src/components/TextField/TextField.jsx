import React from "react";
import PropTypes from 'prop-types';

import styles from './TextField.module.css';

const cn = require('classnames');

export const TextField = ({ className, id, label, icon = true, ...atrs}) => {
  const { required } = atrs;
return (
  <div className={styles.wrapper}>
    {label && <label className={cn(styles.label, className)} htmlFor={id}>
      {label}{required ? <sup>*</sup> : ''}
    </label>}
    <input
      name={id}
      id={id}
      className={styles.input}
      {...atrs}
    />
    {icon &&
      <div className={styles.iconWrapper}>
        <span className={styles.inputIcon} onClick={() => console.log('dsfsfa')}>
          <img src="/clean.svg" />
        </span>
      </div>
    }
  </div>
)
}

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.bool,
}