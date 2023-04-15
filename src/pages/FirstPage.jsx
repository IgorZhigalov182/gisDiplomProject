import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../layouts/header/Header';
import WelcomeWindow from '../layouts/welcomeWindow/WelcomeWindow';
import '../pages/FirstPage.css';

const FirstPage = () => {
  const [userActive, setUserActive] = useState(false);

  return (
    <div className="container">
      <Header />
      <WelcomeWindow />
    </div>
  );
};

export default FirstPage;
