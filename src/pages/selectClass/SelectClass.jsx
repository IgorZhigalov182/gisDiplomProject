import React from 'react';
import LevelSelection from '../../components/levelSelection/LevelSelection';
import Header from '../../layouts/header/Header';

const SelectClass = () => {
  return (
    <div className="container">
      <Header />
      <LevelSelection />
    </div>
  );
};

export default SelectClass;
