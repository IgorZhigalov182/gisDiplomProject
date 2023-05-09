import React from 'react';
import './endingLayout.css';
import Button from '../../components/button/Button';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const EndingLayout = () => {
  const history = useHistory();

  const handleChoiceClass = ({ target }) => {
    const choiceValue = target.innerHTML;
    // console.log(target.innerHTML);

    choiceValue === '9 класс' ? history.push('/9class/infoGis') : history.push('/11class/infoGis');
  };

  return (
    <div className="container lvl">
      <h3>{`Спасибо команда "${localStorage.getItem(
        'team',
      )}" за участие в проекте, надеемся, Вам понравилось, будем признательны, если оставите отзыв о ваших впечалениях`}</h3>
      <div className="innerContainer">
        <Button
          className={'btn btn-primary btnSelect btnEmoji'}
          onClick={handleChoiceClass}
          value={'😡'}
        />
        <Button
          className={'btn btn-primary btnSelect btnEmoji'}
          onClick={handleChoiceClass}
          value={'😐'}
        />
        <Button
          className={'btn btn-primary btnSelect btnEmoji'}
          onClick={handleChoiceClass}
          value={'😃'}
        />
      </div>
      <div className="reviewBlock">
        <h5>Можете написать, что вам понравилось или непонравилось</h5>
        <input className="form-control inputReview" aria-label="йцззцйзцйзйзйц"></input>
        <Button
          className={'btn btn-primary btnSelect btnFinal'}
          onClick={handleChoiceClass}
          value={'Отправить отзыв и завершить'}
        />
      </div>
      <h5 className="h5anotherClass">
        Если у вас осталось время и желание посмотреть, что за задание было у другого класса, то
        можете пройти также и его!
      </h5>
      <div className="innerContainer">
        <Button
          className={'btn btn-primary btnSelect'}
          onClick={handleChoiceClass}
          value={'9 класс'}
        />
        <Button
          className={'btn btn-primary btnSelect'}
          onClick={handleChoiceClass}
          value={'11 класс'}
        />
      </div>
    </div>
  );
};

export default EndingLayout;
