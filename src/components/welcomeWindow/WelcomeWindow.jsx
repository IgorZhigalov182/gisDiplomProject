import React from 'react';
import '../welcomeWindow/welcomeWindow.css';

const WelcomeWindow = () => {
  return (
    <div style={{ margin: '5px' }}>
      <div className="wrapper">
        <p>Добро пожаловать в мир ГИС - Геоинформационно измерительные системы и технологии</p>
        <iframe
          src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"
          style={{ width: '1000px', height: '500px', borderRadius: '15px' }}></iframe>
      </div>
    </div>
  );
};

export default WelcomeWindow;
