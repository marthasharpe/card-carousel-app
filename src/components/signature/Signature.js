import React from 'react';
import './Signature.scss';

const Signature = () => {
    return (
        <div className="footer">
            <p className="signature">Martha Sharpe</p>
            <div className="links">
                <a
                    className="link"
                    href="https://www.linkedin.com/in/marthasharpe2020/"
                    target="blank"
                >
                    <img
                        alt="LinkedIn icon"
                        className="icon"
                        src="http://www.vectorico.com/download/social_media/LinkedIn-Icon.png"
                    />
                </a>
                <a
                    className="link"
                    href="https://github.com/marthasharpe/card-carousel-app"
                    target="blank"
                >
                    <img
                        alt="GitHub icon"
                        className="icon"
                        src="https://icon-library.net/images/github-icon-png/github-icon-png-22.jpg"
                    />
                </a>
            </div>
        </div>
    )
}

export default Signature;