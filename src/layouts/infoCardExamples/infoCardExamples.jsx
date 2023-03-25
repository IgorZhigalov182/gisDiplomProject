import React from 'react';
import '../infoCardExamples/infoCardExamples.css';
import lupaPlantet from '../../../public/img/lupaPlanet2.png';

const InfoCardExamples = () => {
  return (
    <div className="wrapperInfoCardExamples">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body wrapperCardExampleBody">
              <div className="headaerInfoCardExamples">
                <h2 className="card-title headerInfoCard">Как работает ГИС</h2>
                <img src={lupaPlantet} className="lupaPlanetImg" />
              </div>
              <div>
                <br />
                <p className="h3InfoCard">
                  Всё начинается с информации. Источниками пространственных данных в ГИС являются:
                </p>
                <ul className="ulInfoCard">
                  <li>
                    Картографические источники <i class="fa-solid fa-map fa-2xl"></i>
                  </li>
                  <li>
                    Данные дистанционного зондирования (снимки со спутников){' '}
                    <i class="fa-solid fa-satellite fa-2xl"></i>
                  </li>
                  <li>
                    Статистические материалы <i class="fa-solid fa-book fa-2xl"></i>
                  </li>
                  <li>
                    Данные специально проводимых полевых исследований и съемок <br />{' '}
                    (геофизических, геодезических, геохимических и т.д.){' '}
                    <i class="fa-solid fa-person-hiking fa-2xl"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardExamples;
