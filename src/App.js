
import React, { useState, useEffect, useLayoutEffect } from 'react'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar'
import GlobalStyle from './globalStyle';
import Home from './pages';
import { Switch, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
