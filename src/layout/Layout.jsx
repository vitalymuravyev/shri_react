import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

import { AppHeader } from './AppHeader/AppHeader';
import { AppFooter } from './AppFooter/AppFooter';
import {TaskCard} from "../components/TaskCard/TaskCard";
import {TextField} from "../components/TextField/TextField";
import {Modal} from "../components/Modal/Modal";

export const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <AppHeader className={styles.header}/>
            <div className={styles.body}>
                { children }
              <TaskCard />
              <TextField
                id="command"
                label="Build command"
                placeholder="Input placeholder"
                required
              />
            </div>
            <AppFooter className={styles.footer} />
          <Modal />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}
