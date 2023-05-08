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
        <Button className={'btn btn-primary btnSelect'} onClick={handleChoiceClass} value={'😡'} />
        <Button className={'btn btn-primary btnSelect'} onClick={handleChoiceClass} value={'😐'} />
        <Button className={'btn btn-primary btnSelect'} onClick={handleChoiceClass} value={'😃'} />
      </div>
      <h5></h5>
      <input className="form-control" aria-label="йцззцйзцйзйзйц"></input>
      <h5>
        Если у вас осталось время и желание посмотреть, что за задание было у другого класса, то
        можете пройти ещё и его!
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
