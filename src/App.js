// App.js

import React from 'react';
import './App.css';
import Title from './Title';
import Footer from './Footer';
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)` }}>
      <Title />
      { }
      <Footer />
    </div>
  );
}

export default App;
