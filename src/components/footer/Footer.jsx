import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/SMovieS.png";

import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">SMovieS</Link>
          </div>
        </div>

        <div className="footer__content__socials">
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://snapchat.com/" />
          <SocialIcon url="https://facebook.com/" />
          <SocialIcon url="https://instagram.com/" />
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Movies</Link>
            <Link to="/">Series</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Contact Us</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookie Preferences</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Term of Use</Link>
            <Link to="/">Corporate Information</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
