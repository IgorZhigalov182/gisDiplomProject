import React, { useState } from 'react';
import '../modalRegister/modalWindowRegister.css';

const ModalWindowRegister = ({ stateRegistered }) => {
  const [activeModal, setActiveModal] = useState(!stateRegistered);

  const handleSubmit = () => {
    setActiveModal(!activeModal);
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
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Фамилия</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Введите фамилию"
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
                />
              </div>
              <div className="form-group">
                <label for="formGroupExamplePhone">Телефон</label>
                <input
                  type="phone"
                  className="form-control"
                  id="formGroupExamplePhone"
                  placeholder="Введите телефон"
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
