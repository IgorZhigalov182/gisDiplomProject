import React, { useState } from 'react';
import { Route, Router, useHistory } from 'react-router-dom';
import Header from './components/Header';
// import reactLogo from './assets/react.svg';

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
      <h1>Привет мир</h1>
      <div className="d-flex justify-content-center">
        {/* <a href=""></a> */}
        {/* <button className="btn btn-primary" onClick={handleClick}> */}
        Переход к хедеру
        {/* <a href="gis-diplom\src\pages\map.html">sa</a> */}
        {/* <a href="gis-diplom\src\pages\secondPage.html">Link to second page</a> */}
        {/* </button> */}
      </div>
      {/* <div>
        <iframe
          src="https://www.arcgis.com/apps/instant/basic/index.html?appid=c4897230651f451e9a2fd73e5ca7a98f&locale=en-us"
          style={{
            width: '1000px',
            height: '600px',
            frameborder: '0',
            style: 'border:0',
            // allowfullscreen,
          }}>
          iFrames are not supported on this page.
        </iframe>
      </div> */}

      <iframe
        src="https://www.arcgis.com/apps/instant/3dviewer/index.html?appid=ae3083d76812496c816602aeb33b80e9&locale=en-us"
        style={{
          width: '100%',
          height: '500px',
          frameborder: '0',
          style: 'border:0',
          allowfullscreen: true,
        }}>
        iFrames are not supported on this page.
      </iframe>

      <Route path={'/header'} component={() => <Header />} exact />
    </>
  );
}

export default App;
