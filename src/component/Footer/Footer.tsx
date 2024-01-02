import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
/*------------------------------------------*/
import Instagram from "../../svg/Instagram";
import Telegram from "../../svg/Telegram";
import Linkedin from "../../svg/Linkedin";
import NvidiaLogo from "../../svg/NvidiaLogo";
/*------------------------------------------*/
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-column-title">
              <p className="nvidia-2xl-bold">Products</p>
            </div>
            <ul className="footer-column-links">
              <li className="footer-column-link">
                <Link to="/products">Gaming video cards</Link>
              </li>
              <li className="footer-column-link">
                <Link to="/products">Gaming laptops</Link>
              </li>
              <li className="footer-column-link">
                <Link to="/products">Monitors G-SYNC</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">
              <p className="nvidia-2xl-bold">Pages</p>
            </div>
            <ul className="footer-column-links">
              <li className="footer-column-link">
                <Link to="/about">About page</Link>
              </li>
              <li className="footer-column-link">
                <Link to="/news">News page</Link>
              </li>
              <li className="footer-column-link">
                <Link to="/driver">Driver page</Link>
              </li>
              <li className="footer-column-link">
                <Link to="/products">Category page</Link>
              </li>
              <li className="footer-column-link">
                <Link to="/shopping">Shopping cart</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">
              <p className="nvidia-2xl-bold">Social media</p>
            </div>
            <ul className="footer-column-links">
              <li className="footer-column-link social">
                <Linkedin />
                <a
                  href="https://www.linkedin.com/in/andezebast/"
                  target="_blank"
                >
                  linkedin
                </a>
              </li>
              <li className="footer-column-link social">
                <Instagram />
                <a
                  href="https://www.instagram.com/_lazarev_andrey/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className="footer-column-link social">
                <Telegram />
                <a href="https://t.me/Laz_Andrey" target="_blank">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-logo">
          <NvidiaLogo />
        </div>
        <div className="footer-bottom-description">
          <a href="#">Privacy Statement</a>
          <span>|</span>
          <a href="#">Privacy Settings</a>
          <span>|</span>
          <a href="#">Legal</a>
          <span>|</span>
          <a href="#">By Accessibility</a>
          <span>|</span>
          <a href="#">Company policy</a>
          <span>|</span>
          <a href="#">Product safety</a>
          <span>|</span>
          <a href="#">Connect with us</a>
        </div>
        <div className="footer-bottom-copyright">
          <p className="nvidia-p">Copyright © 2023 NVIDIA Corporation</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
