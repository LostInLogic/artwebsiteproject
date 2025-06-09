import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavigationBar/Navbar';
import Logo from "./Logo/Logo"
import Homepage2 from './Homepage/Homepage2';
import "./App.css"
import Footer from "./Footer/Footer"
import FAQ from './About/FAQ';
import Team from "./About/Team";
import StudioPolicies from './Tuition/StudioPolicies';
import BirthdayParties from './ArtPartiesAndEvents/BirthdayParties';
import LocationsLaMesa from './Locations/LocationsLaMesa';
import LocationsSantee from "./Locations/LocationsSantee";
import LocationsBonita from "./Locations/LocationsBonita";
import AdultArtClasses from './ArtClasses/AdultArtClasses';
import ChildrensArtClasses from './ArtClasses/ChildrensArtClasses';
import ScoutClasses from './ArtPartiesAndEvents/ScoutClasses';
import AcrylicPaintEvents from "./ArtPartiesAndEvents/AcrylicPaintEvents";
import CharterSchool from "./Tuition/CharterSchool";
import MissionStatement from "./About/MissionStatement";
import SummerCamp from "./SummerArtCamps/SummerArtCamp";
import TuitionRates from "./Tuition/TuitionRates";


function App() {
  return (
    <>
      <Logo classname="logo" />
      <Navbar classname="navbar" />
      <Routes>
        <Route path="/artwebsiteproject" element={<Homepage2 />} />
        <Route path="/" element={<Homepage2 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/instructors" element={<Team />} />
        <Route path="/studio-policies" element={<StudioPolicies />} />
        <Route path="/birthday-parties" element={<BirthdayParties />} />
        <Route path="/locations/art-classes-la-mesa" element={<LocationsLaMesa />} />
        <Route path="/locations/art-classes-santee" element={<LocationsSantee />} />
        <Route path="/locations/art-classes-bonita" element={<LocationsBonita />} />
        <Route path="/adult-art-classes" element={<AdultArtClasses />} />
        <Route path="/childrens-art-classes" element={<ChildrensArtClasses />} />
        <Route path="/scout-classes" element={<ScoutClasses />} />
        <Route path="/paint-parties" element={<AcrylicPaintEvents />} />
        <Route path="/charter-schools" element={<CharterSchool />} />
        <Route path="/mission" element={<MissionStatement />} />
        <Route path="/summer-art-camp" element={<SummerCamp />} />
        <Route path="/tuition-rates" element={<TuitionRates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
