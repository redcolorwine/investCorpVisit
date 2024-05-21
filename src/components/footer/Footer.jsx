import React from 'react'
import cmedia from './footer.module.css';
import logo from './../../media/logo/Investment corporation.png';
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoThin } from "react-icons/pi";

const Footer = () => {
    return (
        <div className={cmedia.footer}>
            <div className={cmedia.footerWrapper}>
                <div className={cmedia.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={cmedia.company}>
                    <h3>Компания</h3>
                    <ul>
                        <li>О нас</li>
                        <li>Команда</li>
                        <li>Наши услуги</li>
                        <li>Вопрос-ответ</li>
                    </ul>
                </div>
                <div className={cmedia.contacts}>
                    <h3>Контакты</h3>
                    <p>Email: <span>investmentCorp@gmail.com</span></p>
                    <p>Телефон: <span>+7 (994) 332-01-02</span></p>
                </div>
                <div className={cmedia.socials}>
                    <h3>Социальные сети</h3>
                    <PiWhatsappLogoThin size={35} />
                    <IoLogoInstagram size={35} />
                    <PiTelegramLogoThin size={35}/>
                </div>
            </div>
        </div>
    )
}

export default Footer