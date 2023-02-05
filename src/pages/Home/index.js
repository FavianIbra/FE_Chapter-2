import React from 'react';
import Navbar from '../../component/Navbar/navbar';
import Home from '../../component/Home/Index';
import About from '../../component/About';
import Tabbing from '../../component/Tabbing/team';
import Footer from '../footer';
import '../../css/style.css'


const Index = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Tabbing />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
