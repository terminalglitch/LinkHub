import React from "react";
import "../styles/global.scss";

export default function about() {
    return (
        <div className="home-container">
            <div className="top-card">
                <h1 className="title">About</h1>
                <p className="paragraph">
                    Glitch || 22 y/o || She/They
                </p>
                <p className="paragraph">
                    Hi there. I'm an artist and senior computer science university student in the USA.
                    I'm not as active in fandoms as I used to be, but you can find me drawing fanart occasionally.
                    You'll find that I draw my OCs, especially Luca, far more often. I'm not at all consistent in
                    my upload schedule, but I do my best to draw when I have the time.
                </p>
                <p className="paragraph">
                    Scorpio // 4w5 // INFJ
                </p>
                <div className="social-icon-container">
                    <a
                        className="button-link"
                        href="/"
                    >
                        <div className="button">
                            <p className="button-text">Homepage</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}