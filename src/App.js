import React from 'react';
import Navbar from './component/Navbar/navbar';
import Home from './pages/Home/index';
import Tabbing from './component/Tabbing/team';
import Footer from './pages/footer/index'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home/>
      <Tabbing/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
