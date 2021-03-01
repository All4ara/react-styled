
import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar'
import GlobalStyle from './globalStyle';
import Home from './pages';
import { Switch, Route }  from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';
import Homes from './pages/Homes';


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
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/rentals' exact component={Rentals} />
        <Route path='/homes' exact component={Homes} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
