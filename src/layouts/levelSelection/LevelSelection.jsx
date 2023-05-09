import React from 'react';
import './levelSelection.css';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useEffect } from 'react';
import { useState } from 'react';

const LevelSelection = () => {
  const history = useHistory();
  const [data, setData] = useState();

  useEffect(() => {
    setClassInDB();
  }, []);

  const setClassInDB = async () => {
    const dataDB = await fetch('http://localhost:3000/profile');
    const dataDBjson = await dataDB.json();
    // console.log(dataDBjson);

    setData(dataDBjson);
  };

  const addUser = async (personData) => {
    fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(personData),
    });
  };

  console.log(data);

  const handleChoiceClass = async ({ target }) => {
    const choiceValue = target.innerHTML;

    const team = localStorage.getItem('team');

    data.forEach((obj) => {
      if (obj.team === team) {
        obj.class = choiceValue;
      }
    });

    addUser(data);

    choiceValue === '9 класс' ? history.push('/9class/infoGis') : history.push('/11class/infoGis');
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
