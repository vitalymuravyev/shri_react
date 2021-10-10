import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const cn = require('classnames');

import styles from './AppHeader.module.css';
// import {Button} from "../../components/Button/Button";

export const AppHeader = ({className}) => {

  const loc = useLocation();
  console.log(loc);

    return (
        <header className={cn(className, styles.header)}>
          <span className={styles.logo}>School CI server</span>
          <div className={styles.buttonBlock}>
            
          </div>
        </header>
    )
}

AppHeader.propTypes = {
  className: PropTypes.string
}
