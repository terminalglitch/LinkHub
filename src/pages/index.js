import React from "react";
import Helmet from "../components/helmet";
import "../styles/global.scss";
import icon from "../assets/icon.png";
import data from "../metadata.json";
import {
  SiPicartoDotTv,
  SiKoFi,
  SiDeviantart,
  SiTwitter,
  SiInstagram,
  SiSpotify,
} from "react-icons/si";

export default function Card() {
  return (
    <div className="home-container">
      <Helmet />
      <div className="top-card">
        <img className="user-icon" src={icon} alt="test" />
        <h1 id="name">{data.author}</h1>
        <h2 id="username">{`(${data.username})`}</h2>
        <p id="description">{data.description}</p>
        <div className="social-icon-container">
          <a
            className="social-link"
            href={data.socialLinks.twitter}
            rel="noreferrer"
            target="_blank"
          >
            <SiTwitter className="social-icon" />
          </a>
          <a
            className="social-link"
            href={data.socialLinks.instagram}
            rel="noreferrer"
            target="_blank"
          >
            <SiInstagram className="social-icon" />
          </a>
          <a
            className="social-link"
            href={data.socialLinks.deviantart}
            rel="noreferrer"
            target="_blank"
          >
            <SiDeviantart className="social-icon" />
          </a>
          <a
            className="social-link"
            href={data.socialLinks.spotify}
            rel="noreferrer"
            target="_blank"
          >
            <SiSpotify className="social-icon" />
          </a>
          <a
            className="social-link"
            href={data.socialLinks.picarto}
            rel="noreferrer"
            target="_blank"
          >
            <SiPicartoDotTv className="social-icon" />
          </a>
          <a
            className="social-link"
            href={data.socialLinks.kofi}
            rel="noreferrer"
            target="_blank"
          >
            <SiKoFi className="social-icon" />
          </a>
        </div>
        <div className="social-icon-container">
          <a
            className="button-link"
            href="/about"
          >
            <div className="button">
              <p className="button-text">About</p>
            </div>
          </a>
          <a
            className="button-link"
            href="https://blacklivesmatters.carrd.co/"
            rel="noreferrer"
          >
            <div className="button">
              <p className="button-text">BLM Resources</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
