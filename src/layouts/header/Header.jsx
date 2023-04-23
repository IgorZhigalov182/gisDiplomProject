import React, { useState } from 'react';
import logo from '../../../../gis-diplom/public/img/blueLogo.png';
import Button from '../../components/button/Button';
import ModalWindowRegister from '../modalRegister/ModalWindowRegister';
import './header.css';

const Header = () => {
  const [registered, setRegistered] = useState(false);

  const handleClick = async () => {
    setRegistered(!registered);
  };

  return (
    <>
      {registered ? <ModalWindowRegister /> : ''}
      <div className="headerDivWrap">
        <div className="innerDivWrap">
          <img className="logoInHeader" src={logo} alt="Logo" />

          <Button
            value={localStorage.getItem('team') || 'Зарегистрироваться'}
            onClick={handleClick}
            className={'btn btn-primary button'}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
