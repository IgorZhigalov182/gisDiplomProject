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
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa error at ratione
              aliquam cum perferendis vero debitis. Architecto beatae similique rerum velit ab quasi
              magni quos veritatis qui libero?
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindowRegister;
