import React from 'react';
import PropTypes from 'prop-types';

import styles from './Heading.module.css';

const cn = require('classnames');

export const Heading = ({ tag, children, className }) => {
    switch(tag) {
        case 'h1':
            return <h1 className={cn(styles.h1, className)}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(styles.h2, className)}>{children}</h2>;
        case 'h3':
            return <h3 className={cn(styles.h3, className)}>{children}</h3>;
        default:
            return <></>
    }
}

Heading.propTypes = {
    children: PropTypes.string,
    tag: PropTypes.string.isRequired,
    className: PropTypes.string,
  }