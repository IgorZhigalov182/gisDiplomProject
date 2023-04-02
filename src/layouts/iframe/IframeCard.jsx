import React, { useState } from 'react';
import Button from '../../components/button/Button';
import './iframeCard.css';
import Exercise11 from '../exercise11/exercise11';

const IframeCard = () => {
  const [count, setCount] = useState(0);

  const nextExercise = () => {
    setCount((prevState) => prevState + 1);
  };

  const prevExercise = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    // <div classNameName="row">
    //   <iframe src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"></iframe>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title">Лабораторная работа</h5> */}
              {/* <p className="card-text"> */}
              {/* <iframe src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"></iframe> */}
              {/* </p> */}
              <div className="frame">
                {/* <iframe src="https://www.arcgis.com/apps/mapviewer/index.html"></iframe> */}
                {/* <iframe src="https://www.arcgis.com/apps/instant/basic/index.html?appid=c4897230651f451e9a2fd73e5ca7a98f"></iframe> */}
                {/* <iframe src="https://www.arcgis.com/apps/configure-template/index.html?appid=c4897230651f451e9a2fd73e5ca7a98f"></iframe> */}
                <iframe src="https://www.arcgis.com/apps/mapviewer/index.html?webmap=e42c1d8491b8422d84af91a167f79bfc"></iframe>
              </div>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body exercise">
              {count === 0 && <h5 className="card-title">Давайте немного попрактикуемся</h5>}
              {/* <h5 className="card-title">Задание {count}/sum</h5> */}
              <Exercise11 count={count} />
              <div className="btnWrapper">
                {count > 0 && (
                  <Button
                    onClick={prevExercise}
                    value={'Назад'}
                    className={'btn btn-primary iframeBtn'}
                  />
                )}
                <Button
                  onClick={nextExercise}
                  value={'Далее'}
                  className={'btn btn-primary iframeBtn'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeCard;
