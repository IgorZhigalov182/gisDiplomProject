import React from 'react';
import './infoCardExamples1.css';
import lupaPlantet from '../../../public/img/lupaPlanet2.png';
// import gisPie from '../../../public/img/gisPie4.jpg';
// import gisPie from '../../../public/img/gisPie3.webp';
import gisPie from '../../../public/img/gisPie.png';

const InfoCardExamples1 = () => {
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
                {/* <p className="h3InfoCard">
                  Всё начинается с информации. Источниками пространственных данных в ГИС являются:
                </p> */}
                <div className="wrapperCardEx1_9">
                  <div className="imgContainCardEx1_9">
                    <img src={gisPie} className="gisPie" />
                  </div>
                  <div className="textContainCardEx1_9">
                    <p>
                      ГИС хранит информацию о реальном мире в виде набора тематических слоев,
                      которые объединены на основе географического положения.
                    </p>
                    <p>
                      Любая географическая информация содержит сведения о пространственном
                      положении, будь то привязка к географическим или другим координатам либо
                      ссылки на адрес, почтовый индекс, округ переписи населения, название дороги
                      или километровый столб на магистрали и т.п.
                    </p>
                    <p>
                      При использовании подобных ссылок для автоматического определения
                      местоположения или местоположений объекта (объектов) применяется процедура,
                      называемая геокодированием. С ее помощью можно быстро определить и посмотреть
                      на карте, где находится интересующий вас объект или явление (дом, в котором
                      проживает ваш знакомый или находится нужная вам организация; место, где
                      произошло землетрясение или наводнение; маршрут, по которому проще и быстрее
                      добраться до нужного вам пункта или дома).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardExamples1;
