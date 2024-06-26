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
                    <p>Email: <span>investment.corporation@invest-corp.ru</span></p>
                    <p>Телефон: <span>+7 (963) 995-13-66</span></p>
                </div>
                <div className={cmedia.socials}>
                    <h3>Социальные сети</h3>
                    <PiWhatsappLogoThin size={35} />
                    <IoLogoInstagram size={35} />
                    <PiTelegramLogoThin size={35} />
                </div>
                <div className={cmedia.privacy}>
                    <p>
                        Отправляя сообщение в мессенджеры, я подтверждаю, что даю конкретное, предметное, информированное, сознательное и однозначное Согласие на обработку моих персональных данных, и полностью ознакомился и согласен с <a href="/privacy">Пользовательским соглашением, Политикой обработки персональных данных и файлов Cookie</a>
                    </p>
                    <br />
                    <p>
                        Вся представленная информация на сайте не является публичной офертой
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer