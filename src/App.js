import React from 'react';
import About from './components/About';
import Gallery from './components/Gallery';
import Nav from './components/Nav'
function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
