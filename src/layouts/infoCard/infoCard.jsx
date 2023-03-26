import React from 'react';
import './infoCard.css';
import infoCardImg from '../../../public/img/infoCardImg.png';
import arrowRight from '../../../public/img/arrowRight.png';
import { useHistory } from 'react-router-dom';

const InfoCard = () => {
  const history = useHistory();
  const lvlClass = history.location.pathname;
  console.log(lvlClass);

  const handleTransit = () => {
    lvlClass.includes('11')
      ? history.push('/11class/infoGisExample')
      : history.push('/9class/infoGisExample');
  };

  return (
    <>
      <div className="wrapperCardInfo">
        <div className="row" style={{ marginTop: '35px' }}>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body wrapperCardBody">
                <h3 className="card-title headerInfoCard">Что такое ГИС?</h3>
                <br />
                <p className="card-text infoCardP">
                  Географические информационные (геоинформационные) системы - системы, которые
                  создают, управляют, визуализируют и анализируют разные типы данных.
                </p>
                <p className="card-text infoCardP">
                  Другими словами, это инструмент, который позволяет удобным и понятным образом
                  работать с информацией, имеющей географические координаты.
                </p>
                <br />
                <h5 className="pointerExamples">
                  Посмотреть как работает ГИС
                  <img src={arrowRight} className="arrowRightImg" />{' '}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body cardBodyWithImg">
                <img src={infoCardImg} className="infoCardImg" />
                <button href="#" onClick={handleTransit} className="btn btn-primary infoCardBtn">
                  Узнать о работе ГИС
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
