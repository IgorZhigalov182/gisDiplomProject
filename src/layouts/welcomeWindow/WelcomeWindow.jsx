import React from 'react';
import './welcomeWindow.css';

const WelcomeWindow = ({ registered }) => {
  return !registered ? (
    <div className="welcomeWindow" style={{ margin: '5px' }}>
      <div className="wrapper">
        <div className="welcomeDiv">Добро пожаловать в мир ГИС</div>
        {/* CТОЛОВКИ ОКОЛО ЛЭТИ */}
        {/* <iframe
        src="https://www.arcgis.com/apps/instant/basic/index.html?appid=c4897230651f451e9a2fd73e5ca7a98f&locale=en-us"
        width="400"
        height="600"
        frameborder="0">
        iFrames are not supported on this page.
      </iframe> */}
        <p style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.4rem' }}>
          Для того, чтобы мы смогли уведомить Вас о начале приёмной компании в ЛЭТИ просим вас
          зарегистрироваться{' '}
        </p>
        <iframe src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"></iframe>
      </div>
    </div>
  ) : (
    ''
  );
};

export default WelcomeWindow;
