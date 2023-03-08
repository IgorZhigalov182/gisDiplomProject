import React, { useEffect } from 'react';
import LevelSelection from '../levelSelection/LevelSelection';
import '../welcomeWindow/welcomeWindow.css';

const WelcomeWindow = () => {
  // const ha = () => {
  //   let iframe = document.querySelector('html');

  // console.log(
  //   iframe
  //     .querySelector('body')
  //     .querySelector('#root')
  //     .querySelector('.container')
  //     .querySelector('.container')
  //     .querySelector('.welcomeWindow')
  //     .querySelector('.wrapper')
  //     .querySelector('iframe'),
  // );
  // };

  // useEffect(() => {
  // ha();
  // });

  return (
    <div className="welcomeWindow" style={{ margin: '5px' }}>
      <div className="wrapper">
        {/* <h1>Добро пожаловать в мир ГИС</h1> */}
        <div className="welcomeDiv">Добро пожаловать в мир ГИС</div>
        <p></p>

        {/* <img
          src="https://gisgeography.com/wp-content/uploads/2020/10/GIS-Layers-378x550.png"
          alt=""
        /> */}
        <iframe src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"></iframe>

        {/* CТОЛОВКИ ОКОЛО ЛЭТИ */}
        {/* <iframe
          src="https://www.arcgis.com/apps/instant/basic/index.html?appid=c4897230651f451e9a2fd73e5ca7a98f&locale=en-us"
          width="400"
          height="600"
          frameborder="0">
          iFrames are not supported on this page.
        </iframe> */}

        <LevelSelection />
      </div>
    </div>
  );
};

export default WelcomeWindow;
