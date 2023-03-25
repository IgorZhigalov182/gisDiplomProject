import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Header from '../../layouts/header/Header';
import InfoCardExamples from '../../layouts/infoCardExamples/infoCardExamples';
import InfoCardExamples2 from '../../layouts/infoCardExamples2/infoCardExamples2';
import './infoGisExamplesPage.css';

const InfoGisExamplesPage = () => {
  const [actualPage, setActualPage] = useState(0);

  const handlePrevPage = () => {
    setActualPage((prevState) => prevState - 1);
  };

  const handleNextPage = () => {
    setActualPage((prevState) => prevState + 1);
  };

  return (
    <div className="container">
      <Header />
      {actualPage === 0 ? <InfoCardExamples /> : ''}
      {actualPage === 1 ? <InfoCardExamples2 /> : ''}

      <div className="navigationInfoGisExamplePage">
        {actualPage > 0 && (
          <Button value={'Назад'} onClick={handlePrevPage} className={'btn btn-primary'} />
        )}
        <Button value={'Далее'} onClick={handleNextPage} className={'btn btn-primary'} />
      </div>
    </div>
  );
};

export default InfoGisExamplesPage;
