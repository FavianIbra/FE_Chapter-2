import React from 'react';
import Navbar from './component/Navbar/navbar';
import Home from './pages/Home/index';
import Tabbing from './component/Tabbing/team';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home/>
      <Tabbing/>
    </React.Fragment>
  );
}

export default App;
