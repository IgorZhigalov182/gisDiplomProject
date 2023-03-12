import React from 'react';
import Button from '../../components/button/Button';
import './iframeCard.css';

const IframeCard = ({ src }) => {
  return (
    // <div classNameName="row">
    //   <iframe src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"></iframe>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title">Лабораторная работа</h5> */}
              {/* <p className="card-text"> */}
              {/* <iframe src="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-exaggerated/live/"></iframe> */}
              {/* </p> */}
              <div className="frame">
                <iframe src="https://www.arcgis.com/apps/mapviewer/index.html"></iframe>
              </div>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body exercise">
              <h5 className="card-title">Задание</h5>
              <p className="card-text">Для того, чтобы- вам необходимо</p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              <div className="btnWrapper">
                <Button value={'Далее'} className={'btn btn-primary iframeBtn'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeCard;
