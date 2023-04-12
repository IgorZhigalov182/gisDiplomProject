import React from 'react';
import './exercise9.css';
import exe9_1 from '../../../public/img/exe9_1.png';
import exe9_2 from '../../../public/img/exe9_2.png';
import exe9_3 from '../../../public/img/exe9_3.png';
import exe9_4 from '../../../public/img/exe9_4.png';
import exe9_5 from '../../../public/img/exe9_5.png';
import exe9_6 from '../../../public/img/exe9_6.png';
import exe9_7 from '../../../public/img/exe9_7.png';
import exe9_8 from '../../../public/img/exe9_8.png';
import exe9_9 from '../../../public/img/exe9_9.png';
import exe9_10 from '../../../public/img/exe9_10.png';
import exe9_11 from '../../../public/img/exe9_11.png';
import exe9_12 from '../../../public/img/exe9_12.png';
import exe9_13 from '../../../public/img/exe9_13.png';
import exe9_14 from '../../../public/img/exe9_14.png';

const Exercise9 = ({ count }) => {
  return (
    <>
      {count === 0 && (
        <>
          <h4>
            Перед вами виртуальный глобус Земли, используя его, мы решим несколько интересных задач!
          </h4>
          <img src={exe9_1} className="exe9_1" />
          <p>При помощи вращения планеты найдите и наведитесь на надпись Europe (Европа) </p>
          {/* <img src={layer2} className="layer2" /> */}
        </>
      )}

      {count === 1 && (
        <>
          <p>
            Теперь немного приблизтесь, используя инструмент Zoom in (приблизить) или при помощи
            жестов приближения на экране
          </p>
          <img src={exe9_2} className="exe9_2" />
          <p>должно было получиться следующее</p>
          <img src={exe9_3} className="exe9_3" />

          {/* <img src={layer2} className="layer2" /> */}
        </>
      )}

      {count === 2 && (
        <>
          <h5>
            Для создания анимацаии приближения нужно создать слайды. Благодаря которым и будет
            работать анимация.
          </h5>
          <p>
            Чтобы создать слайд сначала необходимо выбрать раздел Slides (слайды) и нажать на
            Capture slide (захват слайда)
          </p>
          <img src={exe9_4} className="exe9_4" />
        </>
      )}

      {count === 3 && (
        <>
          <h5>После чего слайд запечатлится и будет выведен в список.</h5>
          <img src={exe9_5} className="exe9_5" />
          <p>
            Попробуйте самостоятельно повторить следующие шаги пока город Санкт-Петербург не будет
            максимально близко: приблизиться и сделать слайд
          </p>
        </>
      )}

      {count === 4 && (
        <>
          <h5>Должно было получиться около 8-9 слайдов</h5>
          <img src={exe9_6} className="exe9_6" />
          <p>
            Внизу должны появиться слайды по которым можно переключаться и следить за плавным
            приближением к Санкт-Петербургу
          </p>
          <img src={exe9_7} className="exe9_7" />
        </>
      )}

      {count === 5 && (
        <>
          <h5>Для дальнейшего выполнения задания давайте выберем последний слайд:</h5>
          <img src={exe9_8} className="exe9_8" />
          <p>Чтобы находить объекты на карте можно воспользоваться поиском:</p>
          <img src={exe9_9} className="exe9_9" />
        </>
      )}

      {count === 6 && (
        <>
          <p>После чего выбираем самую первую запись из списка</p>
          <img src={exe9_10} className="exe9_10" />
          {/* <p>Чтобы находить объекты на карте можно воспользоваться поиском:</p> */}
          {/* <img src={exe9_11} className="exe9_11" />
          <p>Карта автоматически...</p> */}
        </>
      )}

      {count === 7 && (
        <>
          {/* <p>После чего выбираем самую первую запись из списка</p>
          <img src={exe9_10} className="exe9_10" />
          <p>Чтобы находить объекты на карте можно воспользоваться поиском:</p> */}
          <p>
            Карта автоматически направляет нас к выбранному объекту. При этом открывается модальное
            окно с информацией, если она существует
          </p>
          <img src={exe9_11} className="exe9_11" />
          <p>
            Давайте воспользуемся инструментом для измерения высоты объекта относительно заданных
            нами координат. Для примера проведем измерение высоты бастиона петропавловской крепости
            относительно поверхности земли рядом
          </p>
          <img src={exe9_12} className="exe9_12" />
        </>
      )}

      {count === 8 && (
        <>
          <p>
            Для этого необходимо выбрать из списка категорий справа элемент Analyze (Анализ). Затем
            в открывшемся окне выбрать инструмент Elevation Profile (Профиль Высоты)
          </p>
          <img src={exe9_13} className="exe9_13" />
        </>
      )}

      {count === 9 && (
        <>
          <p>
            Далее нужно выбрать опорные точки, благодаря которым будет строиться график на котором
            можно увидеть изменение высоты выбранной траектории
          </p>
          <img src={exe9_14} className="exe9_14" />
          <p>Итого мы видем, что высота в точке 2 равна почти 7.5м </p>
        </>
      )}
    </>
  );
};

export default Exercise9;
