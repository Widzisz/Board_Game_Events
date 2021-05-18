import React from 'react';
import './creat_user.scss';
import StrangerImage from '../../Images/Stranger 4.png';
import useForm from './useForm';
import validate from './validateInfo';

const CreatUser = () => {
    const title = 'Join us ! Never travel the world alone again';

    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <div className="form-content-right">
            <form onSubmit={handleSubmit} className="form" noValidate>
                <h1>{title}</h1>
                <div className="form-inputs">
                    <label className="form-label">Username</label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">Confirm Password</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password2"
                        placeholder="Confirm your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign up
                </button>
            </form>
            <img
                className="welcome__image"
                src={StrangerImage}
                alt="Image of a stranger"
            ></img>
        </div>
    );
};

export default CreatUser;
