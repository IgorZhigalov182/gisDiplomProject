import React, { useState } from 'react';
// import logo from '../../../gis-diplom/public/img/logo-leti-gold-rus-2017.png';
// import logo from '../../../gis-diplom/public/img/';
import logo from '../../../../gis-diplom/public/img/blueLogo.png';
import ModalWindowRegister from '../modalRegister/ModalWindowRegister';
import '../header/header.css';

const Header = () => {
  const [registered, setRegistered] = useState(false);
  const handleClick = () => {
    setRegistered(!registered);
  };
  return (
    <>
      {registered ? <ModalWindowRegister /> : ''}

      <div style={{ margin: '5px', marginTop: '25px', marginBottom: '20px' }}>
        <div
          style={{
            width: '100%',
            maxHeight: '80px',
            // border: '1px solid black',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <img src={logo} alt="Logo" style={{ minWidth: '20%', maxWidth: '25%' }} />
          <button
            className="btn btn-primary"
            onClick={handleClick}
            style={{ borderRadius: '15px', height: '50px', backgroundColor: '#05336E' }}
            stateRegistered={registered}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
