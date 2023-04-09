import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Header from '../../layouts/header/Header';
import InfoCardExamples from '../../layouts/infoCardExamples/infoCardExamples';
import InfoCardExamples1 from '../../layouts/infoCardExamples1/infoCardExamples1';
import InfoCardExamples2_9 from '../../layouts/infoCardExamples2_9/infoCardExamples2_9';
import InfoCardExamples2_11 from '../../layouts/infoCardExamples2_11/infoCardExamples2_11';
import InfoCardExamples3_9 from '../../layouts/infoCardExamples3_9/infoCardExamples3_9';
import InfoCardExamples3_11 from '../../layouts/infoCardExamples3_11/infoCardExamples3_11';
import InfoCardExamples4_11 from '../../layouts/infoCardExamples4_11/infoCardExamples4_11';
import InfoCardExamples5_11 from '../../layouts/infoCardExamples5_11/infoCardExamples5_11';

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
      {actualPage === 1 ? <InfoCardExamples1 /> : ''}
      {actualPage === 2 && path.includes('9') ? <InfoCardExamples2_9 /> : ''}
      {actualPage === 2 && path.includes('11') ? <InfoCardExamples2_11 /> : ''}
      {actualPage === 3 && path.includes('9') ? <InfoCardExamples3_9 /> : ''}
      {actualPage === 3 && path.includes('11') ? <InfoCardExamples3_11 /> : ''}
      {actualPage === 4 && path.includes('11') ? <InfoCardExamples4_11 /> : ''}
      {actualPage === 5 && path.includes('11') ? <InfoCardExamples5_11 /> : ''}

      {actualPage === 4 && path.includes('9') ? history.push('/9class') : ''}
      {actualPage === 6 && path.includes('11') ? history.push('/11class') : ''}

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
