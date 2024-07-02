import React from 'react'
import './../../App.css';
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoThin } from "react-icons/pi";
import { useRef, useState } from 'react';
import AccordeonItem from '../../components/accordeonItem/AccordeonItem';
import ContactForm from '../../components/contactForm/ContactForm';
import gif02 from './../../media/gifs/housegifcrop.gif';
import gif03 from './../../media/gifs/gftr2.gif';
import imgH from './../../media/estate.jpg';
import elen2 from './../../media/photo/elen2.jpg';
import valery from './../../media/photo/Валерия Главная.jpeg';
import eva from './../../media/photo/Асатрян Ева.jpeg';
import nastya from './../../media/photo/Анастасия.jpg';
import backgr from './../../media/back10.jpg';
import { textAnimation, textAnimation2, textAnimation3, textAnimation4, textAnimation5 } from '../../animations';
import MemCard from '../../components/employee/memCard';

const Main = (props) => {
    const formRef = useRef();


    const goForm = async () => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="mainBlock" ref={props.mainRef}>
                <img src={backgr} alt="" srcset="" />
                <div className="mainText">
                    <motion.h1 initial={'hidden'}
                        whileInView={'visible'}  custom={3} variants={textAnimation3}>INVESTMENT CORPORATION</motion.h1>
                    <motion.p initial={'hidden'}
                        whileInView={'visible'} custom={6} variants={textAnimation3}>ваш персональный помощник <br></br>в поиске <span>лучшей недвижимости</span></motion.p>
                </div>

            </div >
            <div className="AppWrapper">

                <div className="aboutBlock" ref={props.aboutRef}>
                    <h1>[01] <FiMinus size={25} /> О НАС</h1>
                    <motion.div initial={'hidden'}
                        whileInView={'visible'} transition={{ duration: 1.5 }} className="aboutWrapper">
                        <div className="aboutText">
                            <p>Надежное и современное агентство недвижимости, построенное на доверии,
                                честности и экспертности.</p>
                            <motion.p custom={2} variants={textAnimation}><span>Мы всегда на стороне клиента: расскажем честно обо всех достоинствах и недостатках рынка</span></motion.p>
                            <motion.p custom={3} variants={textAnimation}>
                                Опыт и высокая квалификация специалистов <span>INVESTMENT CORPORATION</span> позволяют решить любую задачу, связанную с недвижимостью, мы учитываем все нюансы, критерии и пожелания наших клиентов.
                                Вы можете полностью положиться на нас, поскольку мы даем Вам возможность не отрываться от своих дел и, как <span>результат</span>, получить качественную услугу.</motion.p>
                        </div>
                        <img src={gif02} alt="" srcset="" />

                    </motion.div>

                </div>

                <div className="team" ref={props.teamRef}>
                    <h1>[02] <FiMinus size={25} /> КОМАНДА</h1>
                    <div className="teamWrapper">
                        <MemCard image={elen2} animation={textAnimation} about={'Основатель компании'} name={'Елена Григорян'} custom={3} aboutText={'У нас нет подчиненных, в нашей команде только партнерские отношения. Мы современная компания, создающая тренды и нацеленная на результат. Мы дружная, сплоченная команда единомышленников, влюбленных в свое дело! Наша цель - развитие и рост.'} />
                        <MemCard image={nastya} animation={textAnimation2} about={'Руководитель отдела офиса'} name={'Анастасия Краморенко'} custom={5} aboutText={'Ключ к успеху в сфере недвижимости - это не только знание рынка, но и умение понимать потребности людей. Мы стремимся к тому, чтобы каждый клиент стал нашим постоянным партнером, возвращаясь к нам снова и снова.'} />
                        <MemCard image={eva} animation={textAnimation} about={'Руководитель отдела офиса'} name={'Ева Асатрян'} custom={5} aboutText={'Недвижимость - это комплексная и динамическая сфера. Не существует универсального рецепта успеха. Важно изучать, анализировать, быть готовым к изменениям. И мы Вам с этим поможем!'} />
                        <MemCard image={valery} animation={textAnimation2} about={'Руководитель отдела торговых помещений'} name={'Валерия Главная'} custom={3} aboutText={'Брокер - это очень интересная, многогранная профессия, которая при должном усердии непременно ведет к успеху и высокому уровню заработка. А наша команда готова обучить всем необходимым навыкам и помочь в развитии в данном деле.'} />
                    </div>
                </div>

                <motion.div className="services" ref={props.servicesRef} initial={'hidden'}
                    whileInView={'visible'} viewport={{ amount: 0.2 }}>
                    <h1>[03] <FiMinus size={25} /> НАШИ УСЛУГИ</h1>
                    <div className="servicesWrapper">
                        <div className="servicesText">
                            <div className='serviceType'><span>1</span><motion.p custom={1} variants={textAnimation3}>Переговоры с потенциальными покупателями или арендаторами недвижимости</motion.p></div>
                            <div className='serviceType'><span>2</span><motion.p custom={2} variants={textAnimation3}>Проведение просмотров объектов недвижимости</motion.p></div>
                            <div className='serviceType'><span>3</span><motion.p custom={3} variants={textAnimation3}>Ведение полного цикла сделки от подбора объекта до заключения договора</motion.p></div>
                            <div className='serviceType'><span>4</span><motion.p custom={4} variants={textAnimation3}>Ведение документации по сделкам с недвижимостью</motion.p></div>
                            {/* <div className='serviceType'><span>5</span><motion.p custom={5} variants={textAnimation3}>Юридическая проверка</motion.p></div>
                            <div className='serviceType'><span>6</span><motion.p custom={6} variants={textAnimation3}>Подбор проектов с учетом пожеланий и потребностей</motion.p></div> */}
                        </div>
                        <img src={gif03} alt="" />
                    </div>
                </motion.div>

                <div className="searchingBest" ref={props.searchRef}>
                    <h1>[04] <FiMinus size={25} /> ПОДБОР ЛУЧШЕЙ НЕДВИЖИМОСТИ</h1>
                    <div className="searchingWrapper">
                        <img src={imgH} alt="" />
                        <div className="searchText">
                            <p>Получить персонализированную подборку по вашим параметрам</p>
                            <button onClick={() => goForm()}>ОСТАВИТЬ ЗАЯВКУ</button>
                        </div>
                    </div>
                </div>

                <div className="accordeon" ref={props.accordeonRef}>
                    <h1>[05] <FiMinus size={25} /> ВОПРОС-ОТВЕТ</h1>
                    <div className="accorderonWrapper">
                        <AccordeonItem headText={'Почему стоит обратиться в агенство недвижимости INVESTMENT CORPORATION?'} descrText={'ООО "ИНВЕСТМЕНТ КОРПОРЕЙШН" предоставляет полный комплекс риэлторских услуг на рынке недвижимости. Наше агенство работает на результат, оказывая качественные услуги от подбора до заключения. Нашими клиентами являются не только средние, но и крупные известные российские компании.'} />
                        <AccordeonItem headText={'Почему выгодно сотрудничать с агенством?'} descrText={'Мы сотрудничаем только надежными арендодателями и собственниками.'} />
                        <AccordeonItem headText={'В чем заключается наша работа?'} descrText={'Мы будем сопровождать Вас на всем пути сделки: от выявления запроса до подписания документов.'} />
                    </div>
                </div>

                <div className="contacts" ref={props.contactsRef}>
                    <h1>[06] <FiMinus size={25} /> КОНТАКТЫ</h1>
                    <div className="contactsWrapper">
                        <div className="leftSide">
                            <div className="top">
                                <div className="head">
                                    <h2>Мы всегда на связи!</h2>
                                    <p>Мы готовы ответить на все интересующие Вас вопросы</p>
                                </div>
                                <div className="mail">
                                    <CiMail size={65} />
                                    <p>Email: <span>investment.corporation@invest-corp.ru</span></p>
                                </div>
                                <div className="phone">

                                    <CiPhone size={65} />
                                    <p>Телефон: <span>+7 (963) 995-13-66</span></p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className='socials'>
                                    <h2>Социальные сети</h2>
                                    <div className="socIcons">
                                        <a href='https://web.whatsapp.com/' target='blank'><PiWhatsappLogoThin size={35} /></a>
                                        <a href='https://www.instagram.com/' target='blank'><IoLogoInstagram size={35} /></a>
                                        <a href='https://web.telegram.org/' target='blank'><PiTelegramLogoThin size={35} /></a>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="rightSide" ref={formRef}>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main