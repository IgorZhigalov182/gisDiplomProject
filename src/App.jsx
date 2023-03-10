import React, { useState } from 'react';
import { Route, Router, useHistory } from 'react-router-dom';
import Header from './layouts/header/Header';
import FirstPage from './pages/FirstPage';
// import reactLogo from './assets/react.svg';
import FirstPage9class from './pages/9class/firstPage/FirstPage9class';
import FirstPage11class from './pages/11class/firstPage/FirstPage11class';
import '../src/App.css';
import SelectClass from './pages/selectClass/SelectClass';

function App() {
  return (
    <>
      <div>
        {/* <iframe
        src="https://www.arcgis.com/home/webscene/viewer.html?webscene=b9ad8372ff884bc4a4e78d936b170f7d"
        style={{ width: '1000px', height: '500px' }}></iframe> */}

        {/* <iframe
        src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"
        style={{ width: '1000px', height: '500px' }}></iframe> */}

        {/* <iframe
        src="https://www.arcgis.com/apps/instant/basic/index.html?appid=c4897230651f451e9a2fd73e5ca7a98f&locale=en-us"
        style={{
          width: '1000px',
          height: '600px',
          allow: 'fullscreen',
          // frameborder: '0',
          // style: 'border:0',
          // allowfullscreen,
        }}>
        iFrames are not supported on this page.
      </iframe> */}

        {/* <iframe
        src="https://www.arcgis.com/apps/instant/3dviewer/index.html?appid=ae3083d76812496c816602aeb33b80e9&locale=en-us"
        style={{
          width: '100%',
          height: '500px',
          frameborder: '0',
          style: 'border:0',
          allowfullscreen: true,
        }}>
        iFrames are not supported on this page.
      </iframe> */}

        <Route path={'/'} component={() => <FirstPage />} exact />
        <Route path={'/selectClass'} component={() => <SelectClass />} exact />
        <Route path={'/9class'} component={() => <FirstPage9class />} />
        <Route path={'/11class'} component={() => <FirstPage11class />} />
      </div>
    </>
  );
}

export default App;
