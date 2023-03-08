import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';
import WelcomeWindow from '../components/welcomeWindow/WelcomeWindow';
import '../pages/FirstPage.css';

const FirstPage = () => {
  const handleHideESRIFooter = () => {
    const esriFooter = document.querySelector('.esri-component esri-attribution esri-widget');
    console.log(esriFooter);
  };

  return (
    <div className="container">
      <Header />
      <WelcomeWindow />
    </div>
  );
};

export default FirstPage;
