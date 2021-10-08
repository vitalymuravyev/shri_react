import React from 'react';
import PropTypes from 'prop-types';

const cn = require('classnames');

import styles from './AppHeader.module.css';
import {Button} from "../../components/Button/Button";

export const AppHeader = ({className}) => {
    return (
        <header className={cn(className, styles.header)}>
          <span className={styles.logo}>School CI server</span>
          <div className={styles.buttonBlock}>
            <Button
              // appearance="secondary"
              // icon="run"
              // size="small"
            >Run build</Button>
            <Button
              appearance="secondary"
              icon="set"
              size="small"
            >Settings</Button>
          </div>
        </header>
    )
}

AppHeader.propTypes = {
  className: PropTypes.string
}
