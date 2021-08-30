import React from 'react';
import { useField } from 'formik';
import styles from './Checkbox.module.scss';

export default function Checkbox({children, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label className={styles['login__checkbox_remember-me']}>
            <input type='checkbox' {...field} {...props}></input>
            {children}
            {meta.touched && meta.error}
        </label>
    )
}