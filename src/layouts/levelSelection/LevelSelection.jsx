import React from 'react';
import './levelSelection.css';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';

const LevelSelection = () => {
  const history = useHistory();

  const handleChoiceClass = ({ target }) => {
    const choiceValue = target.innerHTML;
    console.log(target.innerHTML);

    choiceValue === '9 класс' ? history.push('/9class') : history.push('/11class');
  };

  return (
    <div className="container lvl">
      <h3>Выберите свой класс</h3>
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

export default LevelSelection;
