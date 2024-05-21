import React, { useState } from 'react';
import cmedia from './header.module.css';
import { FiAlignJustify } from 'react-icons/fi';
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import logo from './../../media/logo/Investment corporation.png';

const Header = (props) => {

    const [burger, setBurger] = useState(true);

    const clickBurger = () => {
        setBurger(!burger);
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -100 },
    }
    const history = useNavigate();
    const onHref = async (e, num) => {
        e.preventDefault();
        setBurger(!burger);
        await history('/');
        props.menuRefs[num].current.scrollIntoView({ behavior: "smooth" });

    };

    return (
        <div className={cmedia.header}>
            <div className={cmedia.wrapper}>
                <FiAlignJustify size={25} color='white' onClick={() => clickBurger()} />
                <div className={cmedia.logo}>
                    {/* <h1>INVESTMENT CORPORATION</h1> */}
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className={`${burger ? cmedia.burger : cmedia.burger_active}`}>
                <div className={cmedia.menuWrapper}>
                    <motion.nav className={cmedia.menu} animate={!burger ? "open" : "closed"}
                        variants={variants}>
                        <li onClick={() => { setBurger(!burger); history('/') }}><h1>INVESTMENT CORPORATION</h1></li>
                        <li onClick={(event) => onHref(event, 1)}>О нас</li>
                        <li onClick={(event) => onHref(event, 2)}>Команда</li>
                        <li onClick={(event) => onHref(event, 3)}>Вопрос-ответ</li>
                        <li>Подборка проектов</li>
                        <li>Контакты</li>
                    </motion.nav>
                    <div className={cmedia.but}>
                        <FiX size={25} color='white' onClick={() => clickBurger()} />
                    </div>
                </div>
                <div className={cmedia.consult}>
                    <p><a href="#">ОСТАВИТЬ ЗАЯВКУ</a></p>
                    <p><a href="#">ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ</a></p>
                    <p><span>+7 (963) 995-13-66</span></p>
                </div>

            </div>

        </div>
    )
}

export default Header