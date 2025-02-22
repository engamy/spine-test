import React from 'react';
import Navbar from './components/navbar.js';
import ThreeDVis from './components/3dvis';
import FAQ from './components/faq.js';

const App = () => {
  return (
    <div>
      <Navbar />
     <ThreeDVis />
     <FAQ />
    </div>
  );
};
export default App;