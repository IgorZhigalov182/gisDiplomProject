import React from 'react';
import './infoCardExamples3_11.css';
import taskImg from '../../../public/img/taskImg.jpg';
import map from '../../../public/img/mapCreate.png';
import newHolland from '../../../public/img/newHolland.png';
import modelingProcess from '../../../public/img/modelingProcess.jpg';
import analyseData from '../../../public/img/analyseData.png';

const InfoCardExamples3_11 = () => {
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
                  <h3>Моделирование процессов</h3>
                  <img src={modelingProcess} className="map" />
                  <p>
                    Наиболее развитые ГИC, имеющие хорошие средства программирования, широко
                    используются для моделирования природных и техногенных процессов, в том числе
                    распростра­нения загрязнений, лесных пожаров и т.д.
                  </p>
                </div>
                <div className="innerBodyCardExamples2_9 _2">
                  <h3>Запрос и анализ данных</h3>
                  <br />

                  <img src={analyseData} className="analyseData" />
                  <p>
                    ГИС помогают выявлять взаимосвязи между различными параметрами (например,
                    почвами, климатом и урожайностью сельскохозяйственных культур);
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

export default InfoCardExamples3_11;
