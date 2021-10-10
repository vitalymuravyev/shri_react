import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Ptag } from '../Ptag/Ptag'

import styles from './StartPage.module.css';
import { Button } from '../Button/Button';

export const StartPage = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src="/logo.svg" />
            <Ptag className={styles.text}>Configure repository connection and synchronization settings</Ptag>
            <Link to="/settings/">
                <Button className={styles.button}>Open settings</Button>
            </Link>           
        </div>
    )
}


StartPage.propTypes = {
    children: PropTypes.element
  }