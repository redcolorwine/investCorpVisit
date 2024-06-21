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
// import gif02 from './../../media/gifs/gif5tr.gif';
import gif02 from './../../media/gifs/housesgif.gif';
import gif03 from './../../media/gifs/gftr2.gif';
import imgH from './../../media/images/house.jpg';
import elen2 from './../../media/photo/elen2.jpg';
import backgr from './../../media/back10.jpg';

const Main = (props) => {
    const formRef = useRef();

    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    const textAnimation2 = {
        hidden: {
            x: 10,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    const textAnimation3 = {
        hidden: {
            x: 0,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    const textAnimation4 = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    const textAnimation5 = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    const goForm = async () => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="mainBlock" ref={props.mainRef}>
                <img src={backgr} alt="" srcset="" />
                <div className="mainText">
                    <motion.h1 initial={'hidden'}
                        whileInView={'visible'}  custom={3} variants={textAnimation4}>INVESTMENT CORPORATION</motion.h1>
                    <motion.p initial={'hidden'}
                        whileInView={'visible'}  custom={6} variants={textAnimation5}>ваш персональный помощник <br></br>в поиске <span>лучшей недвижимости</span></motion.p>
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
                    <motion.div className="teamWrapper" initial={'hidden'}
                        whileInView={'visible'} viewport={{ amount: 0.2 }}>
                        <div className="memCard">
                            <img src={elen2} alt="team1" />
                            <div className="memText">
                                <h4>Елена Григорян</h4>
                                <motion.p custom={2} variants={textAnimation2}><span>Основатель компании</span></motion.p>
                                <p>Мы дружная, сплоченная команда единомышленников, влюбленных в свое дело!</p>
                                <motion.p custom={4} variants={textAnimation2}><span>Цель нашей компании</span></motion.p>
                                <p>Наша главная цель - развитие и рост. У нас нет подчиненных, в нашей команде только партнерские отношения. Мы современная компания, создающая тренды и нацеленная на результат.</p>
                                {/* <motion.p custom={2} variants={textAnimation2}><span>10 ЛЕТ</span></motion.p>
                                <p>Опыт работа у ведущего застройщика</p>
                                <motion.p custom={4} variants={textAnimation2}><span> {'>1500'}</span></motion.p>
                                <p>Реализованных сделок</p>
                                <motion.p custom={6} variants={textAnimation2} className='descrMem'>
                                    «Ежедневно встречаясь с людьми, которые находятся на этапе принятия решения о покупке квартиры, я научился распознавать истинные желания клиентов и предлагать только то, что будет отвечать их запросам. Так родилась идея создать персональный сервис, способный аккумулировать в себе все предложения на рынке Москвы и выдать решение, адаптированное под вас»
                                </motion.p> */}
                            </div>
                        </div>

                        {/* <div className="memCard">
                            <img src={elen2} alt="team1" />
                            <div className="memText">
                                <h4>Алина Александровна</h4>
                                <motion.p custom={2} variants={textAnimation2}><span>10 ЛЕТ</span></motion.p>
                                <p>Опыт работа у ведущего застройщика</p>
                                <motion.p custom={4} variants={textAnimation2}><span> {'>1500'}</span></motion.p>
                                <p>Реализованных сделок</p>
                                <motion.p custom={6} variants={textAnimation2} className='descrMem'>
                                    «Ежедневно встречаясь с людьми, которые находятся на этапе принятия решения о покупке квартиры, я научился распознавать истинные желания клиентов и предлагать только то, что будет отвечать их запросам. Так родилась идея создать персональный сервис, способный аккумулировать в себе все предложения на рынке Москвы и выдать решение, адаптированное под вас»
                                </motion.p>
                            </div>
                        </div> */}
                    </motion.div>
                </div>

                <motion.div className="services" ref={props.servicesRef} initial={'hidden'}
                    whileInView={'visible'} viewport={{ amount: 0.2 }}>
                    <h1>[03] <FiMinus size={25} /> НАШИ УСЛУГИ</h1>
                    <div className="servicesWrapper">
                        <div className="servicesText">
                            <div className='serviceType'><span>1</span><motion.p custom={1} variants={textAnimation3}>Консультация клиента для формирования точного запроса и параметров объекта недвижимости</motion.p></div>
                            <div className='serviceType'><span>2</span><motion.p custom={2} variants={textAnimation3}>Сопровождение сделки</motion.p></div>
                            <div className='serviceType'><span>3</span><motion.p custom={3} variants={textAnimation3}>Оформление документов</motion.p></div>
                            <div className='serviceType'><span>4</span><motion.p custom={4} variants={textAnimation3}>Банковское взаимодействие</motion.p></div>
                            <div className='serviceType'><span>5</span><motion.p custom={5} variants={textAnimation3}>Юридическая проверка</motion.p></div>
                            <div className='serviceType'><span>6</span><motion.p custom={6} variants={textAnimation3}>Подбор проектов с учетом пожеланий и потребностей</motion.p></div>
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
                        <AccordeonItem headText={'Почему стоит обратиться в агенство недвижимости INVESTMENT CORPORATION?'} descrText={'Наша компания занимается недвижимостью уже не первый год и за это время мы стали профессионалами своего дела. Мы предоставляем полный спектр услуг в сфере покупки и продажи недвижимости, а также комплекс сопутствующих сервисов: подбор недвижимости, полное ипотечное и юридическое сопровождение, готовые решения для дизайна и отделки.'} />
                        <AccordeonItem headText={'Почему выгодно покупать новостройку через агентство?'} descrText={'Обращаясь в агенство, Вы получаете массу преимуществ. Вы платите ту же стоимость, что у застройщика при этом получая приятные бонусы от агентства. Риэлтор подберет вариант, полностью отвечающий Вашим пожеланиям. Мы сотрудничаем только с надёжными застройщиками, поэтому вы защищены от мошеннических схем и убытка. Агенство предоставляет самые выгодные условия покупки недвижимости, а также информацию о скидках и акциях. Будете уверены в юридической чистоте сделки и соблюдении всех пунктов договора.'} />
                        <AccordeonItem headText={'Первичное или вторичное жилье?'} descrText={'Первичное жилье, как правило, стоит дешевле, чем вторичное. При этом, после приобретения жилья, требуется дождаться, когда застройщик закончит строительство, а также потребуется выполнить ремонт.Первичное жилье гораздо проще оформить, чем жилье на вторичном рынке, особенно если квартира приобретается в ипотеку.При этом, на вторичном рынке больше заманчивых и интересных вариантом в различных районах города. Причём у Вас будет уверенность, что поблизости имеются детские сады, школы, магазины, ходит общественный транспорт и вся остальная инфраструктура.'} />
                        <AccordeonItem headText={'В чем заключается наша работа?'} descrText={'Мы будем сопровождать Вас на всем пути к приобретению недвижимости: от выявления запроса до подписания документов о покупке.'} />
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