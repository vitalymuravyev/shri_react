import React from "react";
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import styles from './TaskCard.module.css';

const cn = require('classnames');

const ICONS = {
  DONE: <img src="/done.svg" alt=""/>,
  FAILED: <img src="/failed.svg" alt=""/>,
  WAIT: <img src="/clock.svg" alt=""/>
}

export const TaskCard = ({ item }) => {

  const { status, number, title, branch, commit, author, date, duration } = item;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainInfo}>
        <span className={styles.iconWrapper}>
          {ICONS[status]}
        </span>
        <div className={styles.titleData}>
          <span className={cn(styles.number, {
            [styles.done]: status === 'DONE',
            [styles.failed]: status === 'FAILED',
            [styles.wait]: status === 'WAIT'
          })}>{`#${number}`}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.repositoryInfo}>
          <div className={cn(styles.data, styles.center)}>
            <img src="/code-commit.svg"/>
            <span className={styles.branch}>{branch}</span>
            <span className={styles.commit}>{commit}</span>
          </div>
          <div className={cn(styles.user, styles.center)}>
            <img src="/user.svg"/>
            <span>{author}</span>
          </div>
        </div>
      </div>
      <div className={styles.runData}>
        <div className={cn(styles.date, styles.center)}><img src="/calendar.svg"/>{format(date, 'dd MMM, HH:mm')}</div>
        <div className={cn(styles.time, styles.center)}><img src="/timer.svg"/>{duration}</div>
      </div>
    </div>
  )
}

TaskCard.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  item: PropTypes.object,
  status: PropTypes.string, 
  number: PropTypes.number, 
  title: PropTypes.string, 
  branch: PropTypes.string, 
  commit: PropTypes.string, 
  author: PropTypes.string, 
  date: PropTypes.object, 
  duration: PropTypes.number
}
