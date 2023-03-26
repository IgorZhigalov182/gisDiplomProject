import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Header from '../../layouts/header/Header';
import InfoCardExamples from '../../layouts/infoCardExamples/infoCardExamples';
import InfoCardExamples2_9 from '../../layouts/infoCardExamples2_9/infoCardExamples2_9';
import InfoCardExamples3_9 from '../../layouts/infoCardExamples3_9/infoCardExamples3_9';
import './infoGisExamplesPage.css';

const InfoGisExamplesPage = () => {
  const [actualPage, setActualPage] = useState(0);

  const handlePrevPage = () => {
    setActualPage((prevState) => prevState - 1);
  };

  const handleNextPage = () => {
    setActualPage((prevState) => prevState + 1);
  };

  const history = useHistory();
  const path = history.location.pathname;

  return (
    <div className="container">
      <Header />
      {actualPage === 0 ? <InfoCardExamples /> : ''}
      {actualPage === 1 && path.includes('9') ? <InfoCardExamples2_9 /> : ''}
      {actualPage === 2 && path.includes('9') ? <InfoCardExamples3_9 /> : ''}

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
