import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './SettingsPage.module.css';

import { Heading } from '../Heading/Heading';
import { Ptag } from '../Ptag/Ptag';
import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';

const useFormValues = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback((evt) => {
        return setValue(evt.target.value);
    }, [])

    return {value, onChange};
}

export const SettingsPage = () => {
    const history = useHistory();

    const repositoryValue = useFormValues();
    const commandValue = useFormValues();
    const branchValue = useFormValues();
    const timeValue = useFormValues();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const settings = {
            repository: repositoryValue.value,
            command: commandValue.value,
            branch: branchValue.value || '',
            time: timeValue.value || '',
        }

        localStorage.setItem('settings', JSON.stringify(settings));
        history.push('/');
    }

    const handleCancel = (evt) => {
        evt.preventDefault();
        history.push('/');
    }

    return (
        <div className={styles.wrapper}>
            <Heading className={styles.heading} tag='h3'>
                Settings
            </Heading>
            <Ptag className={styles.text}>
                Configure repository connection and synchronization settings.
            </Ptag>
            <form
                className={styles.form}
                onSubmit={(evt) => handleSubmit(evt)}
            >
                <TextField 
                    label="GitHub repository"
                    id="repository"
                    icon
                    required
                    placeholder="user-name/repo-name"
                    {...repositoryValue}
                />
                <TextField 
                    className={styles.formField}
                    label="Build command"
                    id="command"
                    icon
                    required
                    placeholder="npm ci && npm run build"
                    {...commandValue}
                />
                <TextField 
                    className={styles.formField}
                    label="Main branch"
                    id="branch"
                    icon
                    placeholder="master |"
                    {...branchValue}
                />
                <div className={styles.time}>
                    <span>Synchronize every</span>
                    <TextField 
                        id="time"
                        type="number"
                        min="0"
                        placeholder="13"
                        small
                        {...timeValue}
                    />
                    <span>minutes</span>
                </div>
                <div className={styles.buttonsGroup}>
                    <Button
                        type="submit"
                    >
                        Save
                    </Button>
                    <Button 
                        appearance="secondary"
                        onClick={(evt) => handleCancel(evt)}
                    >Cancel</Button>
                </div>
            </form>
        </div>
    )
}


SettingsPage.propTypes = {
    children: PropTypes.element
  }