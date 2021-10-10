import React from 'react';
import PropTypes from 'prop-types';

import { generateBuilds } from '../../mock/builds';
const builds = generateBuilds(10);

import styles from './BuildHistory.module.css';
import { TaskCard } from '../TaskCard/TaskCard';

export const BuildHistory = () => {
    return (
        <div className={styles.wrapper}>
            {builds.map((item) => <TaskCard item={item} key={item.number} />)}                   
        </div>
    )
}


BuildHistory.propTypes = {
    children: PropTypes.element
}