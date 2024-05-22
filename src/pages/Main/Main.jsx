import React from 'react'
import './../../App.css';
import gif02 from './../../media/gifs/gif5tr.gif';
import gif03 from './../../media/gifs/gftr2.gif';
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import imgP1 from './../../media/images/3d-rendering-online-avatar-design.jpg';
import imgP2 from './../../media/images/7828579.jpg';
import imgH from './../../media/images/house.jpg';
import { useRef, useState } from 'react';
import AccordeonItem from '../../components/accordeonItem/AccordeonItem';

const Main = (props) => {
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
            x: 10,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }

    return (
        <>
            <div className="mainBlock" ref={props.mainRef}>
                <div className="mainText">
                    <h1>INVESTMENT CORPORATION</h1>
                    <p>ваш персональный помощник в поиске лучшей недвижимости</p>
                </div>

            </div>
            <div className="AppWrapper">

                <div className="aboutBlock" ref={props.aboutRef}>
                    <h1>[01] <FiMinus size={25} /> О НАС</h1>
                    <motion.div initial={'hidden'}
                        whileInView={'visible'} transition={{ duration: 1.5 }} className="aboutWrapper">
                        <div className="aboutText">
                            <p>Современное агентство недвижимости, построенное на традиционных ценностях обслуживания,
                                честности и экспертности.</p>
                            <motion.p custom={2} variants={textAnimation}><span>МЫ ЗНАЕМ РЫНОК И СВОБОДНО ГОВОРИМ О ЕГО ДОСТОИНСТВАХ И НЕДОСТАТКАХ.</span></motion.p>
                            <motion.p custom={3} variants={textAnimation}>От знакомства с перспективными инвестиционными проектами до приобретения семейной резиденции для комфортного проживания – <span>INVESTMENT CORPORATION</span> ваш проводник к идеальному выбору недвижимости</motion.p>
                        </div>
                        <img src={gif02} alt="" srcset="" />

                    </motion.div>

                </div>

                <div className="team" ref={props.teamRef}>
                    <h1>[02] <FiMinus size={25} /> КОМАНДА</h1>
                    <motion.div className="teamWrapper" initial={'hidden'}
                        whileInView={'visible'} viewport={{ amount: 0.2 }}>
                        <div className="memCard">
                            <img src={imgP1} alt="team1" />
                            <div className="memText">
                                <h4>Виолетта Сергеевна</h4>
                                <motion.p custom={2} variants={textAnimation2}><span>10 ЛЕТ</span></motion.p>
                                <p>Опыт работа у ведущего застройщика</p>
                                <motion.p custom={4} variants={textAnimation2}><span> {'>1500'}</span></motion.p>
                                <p>Реализованных сделок</p>
                                <motion.p custom={6} variants={textAnimation2} className='descrMem'>
                                    «Ежедневно встречаясь с людьми, которые находятся на этапе принятия решения о покупке квартиры, я научился распознавать истинные желания клиентов и предлагать только то, что будет отвечать их запросам. Так родилась идея создать персональный сервис, способный аккумулировать в себе все предложения на рынке Москвы и выдать решение, адаптированное под вас»
                                </motion.p>
                            </div>
                        </div>

                        <div className="memCard">
                            <img src={imgP2} alt="team1" />
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
                        </div>
                    </motion.div>
                </div>

                <motion.div className="services" ref={props.servicesRef} initial={'hidden'}
                    whileInView={'visible'} viewport={{ amount: 0.2 }}>
                    <h1>[03] <FiMinus size={25} /> НАШИ УСЛУГИ</h1>
                    <div className="servicesWrapper">
                        <div className="servicesText">
                            <div className='serviceType'><span>1</span><motion.p custom={1} variants={textAnimation3}>Брифинг с клиентом для формирования точного запроса и параметров объекта недвижимости</motion.p></div>
                            <div className='serviceType'><span>2</span><motion.p custom={2} variants={textAnimation3}>Сопровождение сделки</motion.p></div>
                            <div className='serviceType'><span>3</span><motion.p custom={3} variants={textAnimation3}>Оформление документов</motion.p></div>
                            <div className='serviceType'><span>4</span><motion.p custom={4} variants={textAnimation3}>Банковское взаимодействие</motion.p></div>
                            <div className='serviceType'><span>5</span><motion.p custom={5} variants={textAnimation3}>Юридическая проверка</motion.p></div>
                            <div className='serviceType'><span>6</span><motion.p custom={6} variants={textAnimation3}>Аналитика рынка, подбор проектов под ваши потребности</motion.p></div>
                        </div>
                        <img src={gif03} alt="" />
                    </div>
                </motion.div>
                <div className="searchingBest">
                    <h1>[04] <FiMinus size={25} /> ПОДБОР ЛУЧШЕЙ НЕДВИЖИМОСТИ</h1>
                    <div className="searchingWrapper">
                        <img src={imgH} alt="" />
                        <div className="searchText">
                            <p>Получить персонализированную подборку по вашим параметрам</p>
                            <button>ОСТАВИТЬ ЗАЯВКУ</button>
                        </div>
                    </div>
                </div>
                <div className="accordeon" ref={props.accordeonRef}>
                    <h1>[05] <FiMinus size={25} /> ВОПРОС-ОТВЕТ</h1>
                    <div className="accorderonWrapper">
                        <AccordeonItem headText={'Почему стоит обращаться в агенство недвижимости, а не напрямую к застройщику?'} descrText={'Мы обладаем широкой экспертизой в вопросах, связанных с рынком недвижимости, поэтому поможем сэкономить время на поиск, предупредим как о достоинствах, так и о недостатках проекта убережем от возможных ошибок при выборе, возьмем на себя процесс оформления сделки.'} />
                        <AccordeonItem headText={'Сколько стоят услуги агентства?'} descrText={'Мы получаем комиссию напрямую от застройщиков, поэтому для наших клиентов это абсолютно бесплатно.'} />
                        <AccordeonItem headText={'Отличается ли стоимость объектов недвижимости от официального сайта проекта?'} descrText={'Нет, мы работаем по прайсу от застройщика, но нам известно о закрытых продажах, уникальных предложениях и специальных условиях, поэтому мы обязательно найдем для вас наиболее выгодные лоты.'} />
                        <AccordeonItem headText={'В чем заключается наша работа?'} descrText={'Мы станем вашим личным советником на пути к приобретению недвижимости: от выявления запроса до подписания документов о покупке.'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main