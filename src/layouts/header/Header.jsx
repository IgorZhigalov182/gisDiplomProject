import React, { useState } from 'react';
import logo from '../../../../gis-diplom/public/img/blueLogo.png';
import Button from '../../components/button/Button';
import ModalWindowRegister from '../../components/modalRegister/ModalWindowRegister';
import './header.css';

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

          <Button
            value={'Зарегистрироваться'}
            onClick={handleClick}
            className={'btn btn-primary button'}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
