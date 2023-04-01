import React from 'react';
import './infoCardExamples4_11.css';
import taskImg from '../../../public/img/taskImg.jpg';
import map from '../../../public/img/mapCreate.png';
import newHolland from '../../../public/img/newHolland.png';
import trends from '../../../public/img/trends.png';
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
                  <h3>Понимание тендеций</h3>
                  <img src={trendsRev} className="trendsImg" />
                  <p>
                    ГИС помогает получить глубокое представление о свойствах данных, которые трудно
                    увидеть и понять при просмотре таблиц. Эта карта показывает данные о росте или
                    потере числа рабочих мест в различных отраслях промышленности и дает
                    количественную оценку местных конкурентных преимуществ.
                  </p>
                </div>
                <div className="innerBodyCardExamples2_9 _2">
                  <h3>Мониторинг изменений</h3>
                  <img src={monitoring} className="monitoring" />
                  <p>
                    {/* Если обычная картинка может заменить тысячу слов, то карта может рассказать
                    больше, чем тысяча картинок. Эта карта наглядно показывает масштабы сокращения
                    оледенения в Южном полушарии. */}
                    Благодрая ГИС можно следить за некоторыми изменениями. Например, при помощи
                    снимков со спутника за разные промежутки времени можно отследить развитие эрозии
                    почвы на ферме.
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
