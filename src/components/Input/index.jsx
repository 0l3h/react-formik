import React from 'react';
import { useField } from 'formik';
import styles from './Input.module.scss';

export default function Input(props) {
    const [field, meta] = useField(props);

    const checkValue  = meta.touched && meta.error;
    const validInputStyles = 
        `${styles['login__input']} 
        ${meta.touched && !meta.error && 
        styles['login__input_input-valid']}`; 

    return (
        <label>
            <input type="text" className={validInputStyles} {...field} {...props}/>
            {
                meta.touched && 
                meta.error &&
                <div className={styles['login__input_error_message']}>
                    {checkValue}
                </div>
            }
        </label>
    )
}