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
        <a href="gis-diplom\src\pages\map.html">sa</a>
        {/* </button> */}
      </div>

      <Route path={'/header'} component={() => <Header />} exact />
    </>
  );
}

export default App;
