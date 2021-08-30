import React from 'react';
import { Formik, Form } from 'formik';
import Input from './../../components/Input';
import Checkbox from './../../components/Checkbox';
import * as Yup from 'yup';
import styles from './SignUpForm.module.scss';

function SignUpForm() {

    const initialValues = {
        email: '', 
        password: '', 
        checkbox: false,
    };
    
    const validationSchema = Yup.object({
        firstName: Yup.string().matches(/[A-Z].*/, 'First name should contain at least one uppercase character').required('Field cannot be empty'),
        lastName: Yup.string().matches(/[A-Z].*/, 'Last name should contain at least one uppercase character').required('Field cannot be empty'),
        displayName: Yup.string().min(4, 'Display name should be more than 4 characters').required('Display name is required'),
        email: Yup.string().email('Incorrect email format').required('Email is required'),
        password: Yup.string().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 
            'Password must contain at least 6 characters, including at least one number, one uppercase and one lowercase letter'
        )
        .required('Type in your password'),
        passwordConfirmation: Yup.string()
            .test('passwordConfirmation', 'Incorrect password', 
                function(value) {
                    return this.parent.password === value;
                }).required('Confirm your password'),
        checkbox: Yup.boolean(),
    });
    
    return (
        <Formik initialValues = {initialValues} validationSchema = {validationSchema}>
            <Form className={styles['signup-form']}>
                <h1 className={styles['signup-form__header-text']}>
                    Create an account
                </h1>
                <h2 className={styles['signup-form__subtitle-text']}>
                    We always keep your name and email address private.
                </h2>

                <section className={styles['signup-form__input-container']}>
                    <Input name="firstName" placeholder="First Name"/>
                    <Input name="lastName" placeholder="Last Name"/>
                    <Input name="displayName" placeholder="Display Name"/>
                    <Input name="email" placeholder="Email address"/>
                    <Input type='password' name="password" placeholder="Password"/>
                    <Input type='password' name="passwordConfirmation" placeholder="Password Confirmation"/>
                </section>
                
                <Checkbox name='checkbox'>
                    <h3>Join As A Buyer</h3>
                    <p> I am looking for a name, logo, or tagline for my business, brand or product.</p> 
                </Checkbox>
                <Checkbox name='checkbox'>
                    <h3>Join As A Buyer</h3>
                    <p> I am looking for a name, logo, or tagline for my business, brand or product.</p> 
                </Checkbox>
                <Checkbox name='checkbox'>
                    Allow Squadhelp to send marketing/promotional offers from time to time
                </Checkbox>
                
                <button className={styles['login__button-login']}>
                    Create account
                </button>
                <button className={styles['login__button-login_with-google']}>
                    Sign up with Google
                </button>
            </Form>
        </Formik>
    )
}

export default SignUpForm;