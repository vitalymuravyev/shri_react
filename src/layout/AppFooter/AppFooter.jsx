import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const cn = require('classnames');

import styles from './AppFooter.module.css';

export const AppFooter = ({ className }) => {
    return (
        <footer className={cn(styles.footer, className)}>
          <div className={styles.wrapper}>
            <div className={styles.links}>
              <a href="#">Support</a>
              <a href="#">Learning</a>
              <a href="#">Русская версия</a>
            </div>
            <span className={styles.copyright}>© {format(new Date(), 'yyyy')} Muravyev Vitaly</span>
          </div>
        </footer>
    )
}

AppFooter.propTypes = {
  className: PropTypes.string,
}
