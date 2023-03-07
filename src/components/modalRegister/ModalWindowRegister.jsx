import React, { useEffect, useState } from 'react';
import '../modalRegister/modalWindowRegister.css';

const ModalWindowRegister = ({ stateRegistered }) => {
  const [activeModal, setActiveModal] = useState(!stateRegistered);
  const [data, setData] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const addPost = async () => {
    fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify([data]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveModal(!activeModal);
    addPost();
  };

  return (
    <>
      {activeModal && (
        <div className="modalWrapper">
          <div className="modalRegisterWindow">
            <p className="infoReg">
              Для того, чтобы уведомить Вас о приеме в ЛЭТИ просим указать данные
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
                <label for="formGroupExamplePhone">Телефон</label>
                <input
                  type="phone"
                  className="form-control"
                  id="formGroupExamplePhone"
                  placeholder="Введите телефон"
                  name="phone"
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary regModal" onClick={handleSubmit}>
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindowRegister;
