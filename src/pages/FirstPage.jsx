import React from 'react';
import Header from '../components/header/Header';
import WelcomeWindow from '../components/welcomeWindow/WelcomeWindow';
import '../pages/FirstPage.css';

const FirstPage = () => {
  return (
    <div className="container">
      <Header />
      <WelcomeWindow />
    </div>
  );
};

export default FirstPage;
