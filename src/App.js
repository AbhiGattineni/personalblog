import './App.css';
import Navbar from './components/pages/navbar'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Home from './components/pages/home'
import Work from './components/pages/work'
import Writing from './components/pages/writing'

import React, { useState } from 'react';

function App() {
  const tabList = {
    'home': <Home />,
    'about': <About />,
    'contact': <Contact />,
    'work': <Work />,
    'writing': <Writing />
  }
  const [activeTab, setActiveTab] = useState();
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat">
        <Navbar setActiveTab={setActiveTab} />
        <div className="columns-1 sm:w-1/2">
          {tabList[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default App;
