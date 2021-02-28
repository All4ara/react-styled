
import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar'
import GlobalStyle from './globalStyle';
import Home from './pages';
import { Switch, Route }  from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
