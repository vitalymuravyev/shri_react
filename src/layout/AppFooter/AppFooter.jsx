import React from 'react';
import { format } from 'date-fns';

import styles from './AppFooter.module.css';

export const AppFooter = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="#">Support</a>
                <a href="#">Learning</a>
                <a href="#">Русская версия</a>
            </div>
            <p>© {format(new Date(), 'yyyy')} Muravyev Vitaly</p>
        </footer>
    )
}
