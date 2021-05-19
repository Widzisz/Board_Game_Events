import React from 'react';
import './creat_user.scss';
import useForm from 'react-hook-form';

const CreatUser = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        // w przyszłosci trzeba podpiąc FIREBASE
    };

    return (
        <section className="form__container">
            <h2>Join us ! Never travel the world alone again</h2>

            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <label>Username:</label>
                <input type="text" name="username" ref={register} />

                <label>Email:</label>
                <input type="email" name="email" ref={register} />

                <label>Password:</label>
                <input type="password" name="password" ref={register} />

                <label>Repeat Password:</label>
                <input type="password" name="password2" ref={register} />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default CreatUser;
