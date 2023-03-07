import React, { useState } from 'react';
import { Route, Router, useHistory } from 'react-router-dom';
import Header from './components/header/Header';
import FirstPage from './pages/FirstPage';
// import reactLogo from './assets/react.svg';
import '../src/App.css';

function App() {
  const history = useHistory();
  const handleClick = () => {
    // history.push('/header');
    // history.replace('http://127.0.0.1:5500/');
    // http://127.0.0.1:5500/
    // a
  };

  return (
    <>
      <div className="container">
        {/* <h1>Привет мир</h1>
      <div className="d-flex justify-content-center">Переход к хедеру</div> */}
        <FirstPage />

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

        <Route path={'/header'} component={() => <Header />} exact />
      </div>
    </>
  );
}

export default App;
