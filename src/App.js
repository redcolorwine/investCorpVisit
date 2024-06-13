import './App.css';
import Header from './components/header/Header';
import { useRef, useState } from 'react';
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
  const contactsRef = useRef();
  const searchRef = useRef();
  const [acc, openAcc] = useState(false);

  return (
    <div className="App">
      <Header menuRefs={[mainRef, aboutRef, teamRef, servicesRef, searchRef, accordeonRef, contactsRef]} />
      <div className="Center">
        <Routes>
          <Route path='/' element={<Main mainRef={mainRef} aboutRef={aboutRef} teamRef={teamRef} servicesRef={servicesRef} searchRef={searchRef} accordeonRef={accordeonRef} contactsRef={contactsRef} />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
