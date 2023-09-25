import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';
import instagram from './img/instargam.svg';
import linkedin from './img/linkedin.svg';
import telegram from './img/telegram.svg';
import nvidiaLogo from './img/nvidiaLogo.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-main">
                <div className="footer-columns">
                    <div className="footer-column">
                        <div className="footer-column-title">
                            <p>Products</p>
                        </div>
                        <ul className="footer-column-links">
                            <li className="footer-column-link">
                                <Link to='/products'>Gaming video cards</Link>
                            </li>
                            <li className="footer-column-link">
                                <Link to='/products'>Gaming laptops</Link>
                            </li>
                            <li className="footer-column-link">
                                <Link to='/products'>Monitors G-SYNC</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-title">
                            <p>Pages</p>
                        </div>
                        <ul className="footer-column-links">
                            <li className="footer-column-link">
                                <Link to='/about'>About page</Link>
                            </li>
                            <li className="footer-column-link">
                                <Link to='/news'>News page</Link>
                            </li>
                            <li className="footer-column-link">
                                <Link to='/driver'>Driver page</Link>
                            </li>
                            <li className="footer-column-link">
                                <Link to='/products'>Category page</Link>
                            </li>
                            <li className="footer-column-link">
                                <Link to='/shopping'>Shopping cart</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-title">
                            <p>Social media</p>
                        </div>
                        <ul className="footer-column-links">
                            <li className="footer-column-link social">
                                <img src={instagram} alt="linkedin"/>
                                <a href='https://www.linkedin.com/in/andezebast/' target='_blank'>linkedin</a>
                            </li>
                            <li className="footer-column-link social">
                                <img src={linkedin} alt="instagram"/>
                                <a href='https://www.instagram.com/_lazarev_andrey/' target='_blank'>Instagram</a>
                            </li>
                            <li className="footer-column-link social">
                                <img src={telegram} alt="telegram"/>
                                <a href='https://t.me/Laz_Andrey' target='_blank'>Telegram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-logo">
                    <img src={nvidiaLogo} alt="footer-logo"/>
                </div>
                <div className="footer-bottom-description">
                    <a href='/'>Положение о конфиденциальности</a>
                    <span>|</span>
                    <a href='/'>Настройки конфиденциальности</a>
                    <span>|</span>
                    <a href='/'>Юридическая</a>
                    <span>|</span>
                    <a href='/'>По Специальным Возможностям</a>
                    <span>|</span>
                    <a href='/'>Политика компании</a>
                    <span>|</span>
                    <a href='/'>Безопасность продуктов</a>
                    <span>|</span>
                    <a href='/'>Связаться с нами</a>
                </div>
                <div className="footer-bottom-copyright">
                    <p>Copyright © 2023 NVIDIA Corporation</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;