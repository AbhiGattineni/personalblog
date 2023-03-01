import "./App.css";
import Navbar from "./components/pages/navbar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Work from "./components/pages/work";

import React, { useState } from "react";

function App() {
  const tabList = {
    home: <Home />,
    about: <About />,
    contact: <Contact />,
    work: <Work />,
  };
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat">
        <Navbar setActiveTab={setActiveTab} />
        <div className="sm:w-1/2 h-[calc(100vh-48px)] grid content-center">
          {tabList[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default App;
