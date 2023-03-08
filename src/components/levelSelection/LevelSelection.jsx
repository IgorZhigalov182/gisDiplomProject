import React from 'react';
import '../levelSelection/levelSelection.css';
import { useHistory } from 'react-router-dom';

const LevelSelection = () => {
  const history = useHistory();
  //   console.log(hystory.location.pathname);

  const handleChoiceClass = ({ target }) => {
    const choiceValue = target.innerHTML;
    console.log(target.innerHTML);

    choiceValue === '9 класс' ? history.push('/9class') : history.push('/11class');
  };

  return (
    <div className="container lvl">
      <h3>Выберите свой класс</h3>
      <div className="innerContainer">
        <button onClick={handleChoiceClass} className="btn btn-primary">
          9 класс
        </button>
        <button onClick={handleChoiceClass} className="btn btn-primary">
          10 - 11 класс
        </button>
      </div>
    </div>
  );
};

export default LevelSelection;
