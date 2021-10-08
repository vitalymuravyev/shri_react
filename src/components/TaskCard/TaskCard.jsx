import React from "react";
import PropTypes from 'prop-types';

import styles from './TaskCard.module.css';

const cn = require('classnames');

export const TaskCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainInfo}>
        <span className={styles.iconWrapper}>
          <img src="/done.svg" alt=""/>
        </span>
        <div className={styles.titleData}>
          <span className={styles.number}>#1368</span>
          <span className={styles.title}>add documentation for postgres scaler</span>
        </div>
        <div className={styles.repositoryInfo}>
          <div className={cn(styles.data, styles.center)}>
            <img src="/code-commit.svg"/>
            <span className={styles.branch}>master</span>
            <span className={styles.commit}>9c9f0b9</span>
          </div>
          <div className={cn(styles.user, styles.center)}>
            <img src="/user.svg"/>
            <span>Philip Kirkorov</span>
          </div>
        </div>
      </div>
      <div className={styles.runData}>
        <div className={cn(styles.date, styles.center)}><img src="/calendar.svg"/>21 янв, 03:06</div>
        <div className={cn(styles.time, styles.center)}><img src="/timer.svg"/>1 ч 20 мин</div>
      </div>
    </div>
  )
}

TaskCard.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
}
