import React from 'react';
import './create_user.scss';
import db from '../../firebase';
import { useForm } from 'react-hook-form';
//connection between ReactHookForm and Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import SendCreateUser from './SendCreatUser';

const schema = yup.object().shape({
    userName: yup.string().required('What is your name?'),
    email: yup.string().email().required('Email is a required field'),
    password: yup
        .string()
        .min(4, 'Password must be at least 4 characters')
        .max(10)
        .required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const CreateUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const submitForm = data => {
        console.log(data);
    };
    return (
        <section className="form__container">
            <form className="form" onSubmit={handleSubmit(submitForm)}>
                <h2 className="form__title">Join us!</h2>

                <input
                    className="form__input"
                    type="text"
                    name="firstName"
                    placeholder="Your Name"
                    {...register('userName')}
                />
                <p className="error">{errors.userName?.message}</p>
                <input
                    className="form__input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    {...register('email')}
                />
                <p className="error">{errors.email?.message}</p>
                <input
                    className="form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register('password')}
                />
                <p className="error">{errors.password?.message}</p>
                <input
                    className="form__input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...register('confirmPassword')}
                />
                <p className="error">
                    {errors.confirmPassword && 'Password Should Match!'}
                </p>

                <input
                    id="submit"
                    className="form__btn"
                    type="submit"
                    value="submit"
                    onClick={SendCreateUser}
                />
            </form>
        </section>
    );
};

export default CreateUser;
