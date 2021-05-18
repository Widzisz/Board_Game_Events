import React from 'react';
import './welcome_page.scss';
import StrangerImage from '../../Images/Stranger 4.png';

const WelcomePage = () => {
    const title = 'Hello Stranger ';
    const text = 'Are you looking for new companions for your adventure?';

    return (
        <div className="welcome__container">
            <section className="welcome__section">
                <h1 className="welcome__section-title">{title}</h1>
                <p className="welcome__section-text">{text}</p>
                <button className="welcome__section-btn1">Skip</button>
                <button className="welcome__section-btn2">Continue</button>
            </section>
            <img
                className="welcome__image"
                src={StrangerImage}
                alt="Image of a stranger"
            ></img>
        </div>
    );
};

export default WelcomePage;
