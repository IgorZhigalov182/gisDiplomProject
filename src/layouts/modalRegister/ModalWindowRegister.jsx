import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import './modalWindowRegister.css';

const ModalWindowRegister = () => {
  const [activeModal, setActiveModal] = useState(true);
  const [data, setData] = useState({ id: '' });

  const history = useHistory();

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.id = Date.now();
    localStorage.setItem('team', data.team);
    await addUser(data);
    setActiveModal(!activeModal);
    history.push('/selectClass');
  };

  const handleContinue = () => {
    addUser(data);
    setActiveModal(!activeModal);
    setTimeout(() => {
      setActiveModal(activeModal);
    }, 0);
  };

  return (
    <>
      {activeModal && (
        <div className="modalWrapper">
          <div className="modalRegisterWindow">
            <p className="infoReg">
              Возможно, вы знакомитесь с ГИС не один. Для того, чтобы зарегистрировать каждого
              участника необходимо воспользоваться кнопкой - "Следующий участник". Когда каждый
              участник зарегистрируется нажмите "Зарегистрироваться"
            </p>
            <p className="infoReg warning">
              Если Вы не хотите указывать свои персональные данные, нажмите на кнопку
              Зарегистрироваться в самом конце, не заполняя поля.
            </p>
            <form className="formRegister">
              <div className="form-group">
                <label for="formGroupExampleInput">Имя</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Введите имя"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Фамилия</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Введите фамилию"
                  name="secondName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Введите email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExamplePhone">Название команды</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExamplePhone"
                  placeholder="Введите название команды"
                  name="team"
                  onChange={handleChange}
                />
              </div>
              <div className="buttons">
                <Button
                  value={'Следующий участник'}
                  onClick={handleContinue}
                  className={'btn btn-secondary regModal next'}
                />
                <Button
                  value={'Зарегистрироваться'}
                  onClick={handleSubmit}
                  className={'btn btn-primary regModal reg'}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindowRegister;
