import React from 'react'
import { Formik, Form } from 'formik';
import styles from './LogInPage.module.scss';
import * as Yup from 'yup';
import Input from './../../components/Input';
import Checkbox from './../../components/Checkbox';

function LogInPage() {
    const validationSchema = Yup.object({
        email: Yup.string('Email must be a string value').email('Incorrect email format').required('Email is required'),
        password: Yup.string()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 
                    'Password must contain at least 6 characters, including at least one number, one uppercase and one lowercase letter'
                )
                .required('Password is required'),
        checkbox: Yup.boolean(),
    });

    const initialValues = {
        email: '', 
        password: '', 
        checkbox: false,
    }

    return (
        <Formik className={styles['login']} 
                initialValues = {initialValues}
                validationSchema = {validationSchema}>

            <Form className={styles['login__form']}>
                <h2 className={styles['login__header-text']}>Login to your account</h2>

                <Input name="email" type="text" placeholder="Email address"/>
                <Input name='password' type='password' placeholder='Password'/>

                <Checkbox name='checkbox' type='checkbox'>
                    Remember me
                </Checkbox>

                <a className={styles['login__link_forgot-password']} href="#blanc">Forgot Password</a>
                <button className={styles['login__button-login']}>
                    Login
                </button>
                <button className={styles['login__button-login_with-google']}>
                    Sign in with Google
                </button>
            </Form>
        </Formik>
    )
}

export default LogInPage;