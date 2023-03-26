import React from 'react';
import './infoCardExamples2_9.css';
import taskImg from '../../../public/img/taskImg.jpg';
import map from '../../../public/img/mapCreate.png';
import newHolland from '../../../public/img/newHolland.png';

const InfoCardExamples3_9 = () => {
  return (
    <div className="wrapperInfoCardExamples">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body wrapperCardExampleBody">
              <div className="headaerInfoCardExamples">
                <h2 className="card-title headerInfoCard">Какие задачи решает ГИС</h2>
                <img src={taskImg} className="lupaPlanetImg" />
              </div>
              <div className="bodyCardExamples2_9">
                <div className="innerBodyCardExamples2_9 _1">
                  <h3>
                    Создание карт <br /> (визуализация данных)
                  </h3>
                  <img src={map} className="map" />
                  <p>
                    На основании различных источников данных формируется база данных, которая в
                    последствии визуализируется в привычный формат карты.
                  </p>
                </div>
                <div className="innerBodyCardExamples2_9 _2">
                  <h3>
                    Получение геоинформации <br />{' '}
                  </h3>
                  <br />

                  <img src={newHolland} className="newHolland" />
                  <p>
                    {' '}
                    Получение ответов на различные вопросы (например, что располагается на данном
                    участке ? На каком расстоянии друг от друга расположены эти объекты?){' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardExamples3_9;
