import './App.css';
import Header from './components/header/Header';
import gif02 from './media/gifs/gif5.gif';
import gif03 from './media/gifs/gif1.gif';
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import imgP1 from './media/images/3d-rendering-online-avatar-design.jpg';
import imgP2 from './media/images/7828579.jpg';
import imgH from './media/images/house.jpg';
import { useRef, useState } from 'react';
import AccordeonItem from './components/accordeonItem/AccordeonItem';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Privacy from './pages/Privacy/Privacy';

function App() {

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
      x: 300,
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
      x: -300,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  }
  const mainRef = useRef();
  const aboutRef = useRef();
  const teamRef = useRef();
  const accordeonRef = useRef();
  const servicesRef = useRef();
  const [acc, openAcc] = useState(false);

  return (
    <div className="App">
      <Header menuRefs={[mainRef, aboutRef, teamRef, accordeonRef]} />
      <div className="Center">
        <Routes>
          <Route path='/' element={<Main mainRef={mainRef} aboutRef={aboutRef} teamRef={teamRef} accordeonRef={accordeonRef} />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;