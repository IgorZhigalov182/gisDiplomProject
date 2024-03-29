import React from 'react';
import LevelSelection from '../../layouts/levelSelection/LevelSelection';
import Header from '../../layouts/header/Header';
import InfoCard from '../../layouts/infoCard/infoCard';

const SelectClass = () => {
  return (
    <div className="container">
      <Header />
      <LevelSelection />
      {/* <InfoCard /> */}
    </div>
  );
};

export default SelectClass;
