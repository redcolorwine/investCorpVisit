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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccordeonItem from '../../components/accordeonItem/AccordeonItem';
import ContactForm from '../../components/contactForm/ContactForm';
import gif02 from './../../media/gifs/housegifcrop.gif';
import gif03 from './../../media/gifs/hand2.gif';
import imgH from './../../media/estate.jpg';
import elen2 from './../../media/photo/elen2.jpg';
import valery from './../../media/photo/Валерия Главная.jpeg';
import eva from './../../media/photo/Асатрян Ева.jpeg';
import nastya from './../../media/photo/Анастасия.jpg';
import backgr from './../../media/back10.jpg';
import mc1 from './../../media/mc1.jpg';
import mc2 from './../../media/mc2.jpg';
import mc3 from './../../media/mc3.jpg';
import { textAnimation, textAnimation2, textAnimation3, textAnimation4, textAnimation5 } from '../../animations';
import MemCard from '../../components/employee/memCard';

const Main = (props) => {
    const formRef = useRef();
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        // slidesToShow: 3,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const goForm = async () => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="mainBlock" ref={props.mainRef}>
                <img src={backgr} alt="" srcset="" />
                <div className="mainText">
                    <motion.h1 initial={'hidden'}
                        whileInView={'visible'} custom={3} variants={textAnimation3}>INVESTMENT CORPORATION</motion.h1>
                    <motion.p initial={'hidden'}
                        whileInView={'visible'} custom={6} variants={textAnimation3}>ваш персональный помощник <br></br>в поиске <span>лучшей недвижимости</span></motion.p>
                </div>

            </div >
            <div className="AppWrapper">

                <div className="aboutBlock" ref={props.aboutRef}>
                    <h1>О НАС</h1>
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
                    <h1>КОМАНДА</h1>
                    <div className="teamWrapper">
                        <MemCard image={elen2} animation={textAnimation} about={'Основатель компании'} name={'Елена Григорян'} custom={3} aboutText={'Мы современная компания, создающая тренды и нацеленная на результат. Мы дружная, сплоченная команда единомышленников, влюбленных в свое дело! Наша цель - развитие и рост.'} />
                        <MemCard image={nastya} animation={textAnimation2} about={'Руководитель отдела офисной недвижимости'} name={'Анастасия Краморенко'} custom={5} aboutText={'Ключ к успеху в сфере недвижимости - это не только знание рынка, но и умение понимать потребности людей. Мы стремимся к тому, чтобы каждый клиент стал нашим постоянным партнером, возвращаясь к нам снова и снова.'} />
                        <MemCard image={eva} animation={textAnimation} about={'Руководитель отдела офисной недвижимости'} name={'Ева Асатрян'} custom={5} aboutText={'Недвижимость - это комплексная и динамическая сфера. Не существует универсального рецепта успеха. Важно изучать, анализировать, быть готовым к изменениям. И мы Вам с этим поможем!'} />
                        <MemCard image={valery} animation={textAnimation2} about={'Руководитель отдела торговых помещений'} name={'Валерия Главная'} custom={3} aboutText={'Брокер - это очень интересная, многогранная профессия, которая при должном усердии непременно ведет к успеху и высокому уровню заработка. А наша команда готова обучить всем необходимым навыкам и помочь в развитии в данном деле.'} />
                    </div>
                </div>

                <motion.div className="services" ref={props.servicesRef} initial={'hidden'}
                    whileInView={'visible'} viewport={{ amount: 0.2 }}>
                    <h1>НАШИ УСЛУГИ</h1>
                    <div className="servicesWrapper">
                        <div className="servicesText">
                            <div className='serviceType'><span>1</span><motion.p custom={1} variants={textAnimation3}>Переговоры с потенциальными покупателями или арендаторами недвижимости</motion.p></div>
                            <div className='serviceType'><span>2</span><motion.p custom={2} variants={textAnimation3}>Проведение просмотров объектов недвижимости</motion.p></div>
                            <div className='serviceType'><span>3</span><motion.p custom={3} variants={textAnimation3}>Ведение полного цикла сделки от подбора объекта до заключения договора</motion.p></div>
                            <div className='serviceType'><span>4</span><motion.p custom={4} variants={textAnimation3}>Ведение документации по сделкам с недвижимостью</motion.p></div>
                            {/* <div className='serviceType'><span>5</span><motion.p custom={5} variants={textAnimation3}>Юридическая проверка</motion.p></div>
                            <div className='serviceType'><span>6</span><motion.p custom={6} variants={textAnimation3}>Подбор проектов с учетом пожеланий и потребностей</motion.p></div> */}
                        </div>
                        {/* <img src={gif03} alt="" /> */}
                        <video width="400" autoPlay={true} muted playsInline loop style={{ pointerEvents: "none" }}>
                            <source src='/assets/videos/investVideo.mp4' type="video/mp4" />
                            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                        </video>

                    </div>
                </motion.div>

                <div className="searchingBest" ref={props.searchRef}>
                    <h1>ПОДБОР ЛУЧШЕЙ НЕДВИЖИМОСТИ</h1>

                    <div className="searchingWrapper">
                        <Slider {...settings}>
                            <div>
                                <div className="slideText">
                                    <h4>Аренда офисов класса A, А+ и B+</h4>
                                    <p>Площадь от 30 м.<sup>2</sup></p>
                                </div>

                                <img src={mc1} alt="" />
                            </div>
                            <div>
                                <div className="slideText">
                                    <h4>Продажа офисов класса A, A+ и B+</h4>
                                    <p>Площадь от 30 м.<sup>2</sup></p>
                                </div>
                                <img src={mc2} alt="" />
                            </div>
                            <div>
                                <div className="slideText">
                                    <h4>Ритейл</h4>
                                    <p>Площадь от 10 до 10'000 м.  <sup>2</sup></p>
                                </div>
                                <img src={mc3} alt="" />
                            </div>
                        </Slider>
                        <div className="searchText">
                            <p>Получить персонализированную подборку по вашим параметрам</p>
                            <button onClick={() => goForm()}>ОСТАВИТЬ ЗАЯВКУ</button>
                        </div>
                    </div>
                </div>

                <div className="accordeon" ref={props.accordeonRef}>
                    <h1>ВОПРОС-ОТВЕТ</h1>
                    <div className="accorderonWrapper">
                        <AccordeonItem headText={'Почему стоит обратиться в агенство недвижимости INVESTMENT CORPORATION?'} descrText={'Мы предоставляем качественные услуги в сфере консалтинга по операциям с коммерческой недвижимостью для собственников, потребителей и инвесторов. Наша общественная миссия - помочь большему количеству клиентов, найти оптимальные решения вопросов, связанных с недвижимостью, обеспечить максимальную выгоду и удобство сделки, а также сделать рынок консалтинговых, брокерских услуг цивилизованным и прозрачным.'} />
                        <AccordeonItem headText={'Почему выгодно сотрудничать с агенством?'} descrText={'Наше агенство сотрудничает только с надежными арендодателями и собственниками. Мы гордимся нашей командой профессиональных брокеров, ведь опыт каждого от 3-х до 10 лет, а в нашем портфолио множество успешно реализованных сделок с лучшими компаниями страны.'} />
                        <AccordeonItem headText={'В чем заключается наша работа?'} descrText={'Мы будем сопровождать Вас на всем пути сделки: от выявления запроса до подписания документов. Клиент получает максимально комфортные условия, начиная от привлекательной цены, заканчивая максимальной оперативностью в решении вопросов.'} />
                    </div>
                </div>

                <div className="contacts" ref={props.contactsRef}>
                    <h1>КОНТАКТЫ</h1>
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
                                        <a href='https://wa.me/+79639951366' target='blank'><PiWhatsappLogoThin size={35} /></a>
                                        <a href='https://www.instagram.com/invest__corp/' target='blank'><IoLogoInstagram size={35} /></a>
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