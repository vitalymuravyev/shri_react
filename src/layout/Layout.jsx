import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';
import { AppHeader } from './AppHeader/AppHeader';
import { AppFooter } from './AppFooter/AppFooter';

export const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <AppHeader />
            <div className={styles.body}>
                { children }
            </div>
            <AppFooter />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}
