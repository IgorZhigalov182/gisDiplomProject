import React from 'react';
import './infoCardExamples5_11.css';
import taskImg from '../../../public/img/taskImg.jpg';
import map from '../../../public/img/mapCreate.png';
import probka from '../../../public/img/probka.jpg';
import hur from '../../../public/img/hur.jpg';
import trendsRev from '../../../public/img/trendsRev.jpg';
import analyseData from '../../../public/img/analyseData.png';
import monitoring from '../../../public/img/monitoringChange.png';

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
                  <h3>Управление ситуацией и реагирование на события</h3>
                  <img src={hur} className="trendsImg" />
                  <p>
                    ГИС обеспечивает ситуационную осведомленность в режиме реального времени. На
                    этой карте ураганов и циклонов показано их потенциальное воздействие на
                    население и предприятия, вероятные пути перемещения штормов и штормовые нагоны
                    волн.
                  </p>
                </div>
                <div className="innerBodyCardExamples2_9 _2">
                  <h3>Прогнозирование </h3>
                  <br />
                  <img src={probka} className="monitoring" />
                  <p>Можно использовать ГИС для прогнозирования дорожного трафика.</p>
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
