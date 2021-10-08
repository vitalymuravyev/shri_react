import React from 'react';
import Popup from 'reactjs-popup';
import {Button} from "../Button/Button";

import styles from './Modal.module.css';

// const cn = require('classnames');

export const Modal = () => (
  <Popup
    trigger={<Button>Open Modal</Button>}
    modal
    nested
  >
    {close => (
      <div className={styles.modal}>
        <div className={styles.header}> New build </div>
        <div className={styles.content}>
          Enter the commit hash which you want to build.
        </div>
        <div className={styles.actions}>
          <Button>Save</Button>
          <button
            className={styles.button}
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);