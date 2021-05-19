import React from 'react';
import './creat_user.scss';
import { useForm } from 'react-hook-form';
//connection between ReactHook and Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    userName: yup.string().required('How should I call you?'),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const CreatUser = () => {
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
            <h2 className="form__title">Join us!</h2>

            <form className="form" onSubmit={handleSubmit(submitForm)}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Your Name..."
                    {...register('userName')}
                />
                <p>{errors.userName?.message}</p>
                <input
                    type="text"
                    name="email"
                    placeholder="Email..."
                    {...register('email')}
                />
                <p>{errors.email?.message}</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                    {...register('password')}
                />
                <p>{errors.password?.message}</p>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password..."
                    {...register('confirmPassword')}
                />
                <p>{errors.confirmPassword && 'Password Should Match!'}</p>
                <input type="submit" id="submit" />
            </form>
        </section>
    );
};

export default CreatUser;
