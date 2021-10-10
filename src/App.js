import React from 'react';
import PropTypes from 'prop-types';

import { AppFooter } from './components/AppFooter/AppFooter';
import { AppHeader } from './components/AppHeader/AppHeader';

import styles from './App.module.css';

function App({ children }) {
  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <div className={styles.body}>
        {children}
      </div>
      <AppFooter className={styles.footer}/>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element
}

export default App;
