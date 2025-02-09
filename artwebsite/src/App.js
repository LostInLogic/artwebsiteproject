import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from "./Logo"
import Homepage from './Homepage';
import Homepage2 from './Homepage2';
import FAQ from './FAQ';
import Team from "./Team";
import StudioPolicies from './StudioPolicies';

function App() {
  return (
    <>
      <Logo classname="logo"/>
      <Navbar classname="navbar"/>
      <Routes>
        <Route path="/" element={<Homepage2 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/instructors" element={<Team />} />
        <Route path="/studio-policies" element={<StudioPolicies />} />
      </Routes>
    </>
  );
}

export default App;
