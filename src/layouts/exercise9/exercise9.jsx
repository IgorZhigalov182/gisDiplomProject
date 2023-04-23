import React, { useState } from 'react';
import './exercise9.css';
import '../exercise11/exercise11.css';
import Button from '../../components/button/Button';

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
import exe9_15 from '../../../public/img/exe9_15.png';
import exe9_16 from '../../../public/img/exe9_16.png';
import exe9_17 from '../../../public/img/exe9_17.png';
import exe9_18 from '../../../public/img/exe9_18.png';
import exe9_19 from '../../../public/img/exe9_19.png';
import exe9_20 from '../../../public/img/exe9_20.png';
import exe9_21 from '../../../public/img/exe9_21.png';
import exe9_22 from '../../../public/img/exe9_22.png';
import exe9_23 from '../../../public/img/exe9_23.png';
//
import trends from '../../../public/img/trends.png';
import distance from '../../../public/img/exe12.png';
// import distance1 from '../../../public/img/exe13.png';
import distance2 from '../../../public/img/exe14.png';
import distance3 from '../../../public/img/exe15.png';
import distance4 from '../../../public/img/exe16.png';
import distance5 from '../../../public/img/exe17.png';
import distance6 from '../../../public/img/exe18.png';
import lopuhSad from '../../../public/img/lopuhSad.jpg';
import search from '../../../public/img/search.png';
import search2 from '../../../public/img/search2.png';
import search3 from '../../../public/img/search3.png';
import search4 from '../../../public/img/search4.png';
import searchResult from '../../../public/img/searchResult.png';

const Exercise9 = ({ count }) => {
  const [answerCorrect, setAnswerCorrect] = useState(null);

  count === 15 ? localStorage.setItem('secondExercise', 'true') : '';

  const checkCorrect = (e) => {
    e.preventDefault();
    const { target } = e;
    const answer = target.innerHTML;

    answer === 'Кафе Остров' ? setAnswerCorrect(true) : setAnswerCorrect(false);
  };

  return (
    <>
      {count === 0 && (
        <>
          <h5>
            Перед вами виртуальный глобус Земли, используя его, мы решим несколько интересных задач!
          </h5>
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
            нами координат. Для примера проведем измерение высоты бастиона Петропавловской крепости
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

      {count === 10 && (
        <>
          <h5>
            При помощи функций платформы можно узнать информацию о расположении Земли относительно
            Солнца
          </h5>
          <p>
            Давайте наведёмся при помощи созданных ранее слайдов или же при помощи инструментов
            приближения/отдаления на следующий масштаб:
          </p>
          <img src={exe9_15} className="exe9_15" />
        </>
      )}

      {count === 11 && (
        <>
          <p>
            Теперь при помощи инструмента Daylight/weather (Дневной свет/погода) можно пронаблюдать
            за актуальной погодой в выбранной местности и уровнем естественной освещённости
          </p>
          <img src={exe9_16} className="exe9_16" />
          <p>Попробуем собственноручно изменить эти параметры</p>
        </>
      )}

      {count === 12 && (
        <>
          <p>
            Теперь при помощи инструмента Daylight/weather (Дневной свет/погода) можно пронаблюдать
            за актуальной погодой в выбранной местности и уровнем естественной освещённости
          </p>
          <h5>Активировав атрибуты: </h5>
          <p>Sun position by date and time (положение солнца по дате и времени) и Shadows(тень)</p>
          <p>
            Двигая ползунок времени можно наблюдать за тем, как солнце будет освещать выбранный
            регион в выбранное время
          </p>
          <img src={exe9_17} className="exe9_17" />
        </>
      )}

      {count === 13 && (
        <>
          <p>
            Теперь при помощи инструмента Daylight/weather (Дневной свет/погода) можно пронаблюдать
            за актуальной погодой в выбранной местности и уровнем естественной освещённости
          </p>
          <div className="changesLight">
            <img src={exe9_18} className="exe9_18" />
            <img src={exe9_19} className="exe9_19" />
            <img src={exe9_20} className="exe9_20" />
          </div>
        </>
      )}

      {count === 14 && (
        <>
          <p>
            Также можно отдалиться и увидеть как изменяется освещённость в течении дня более
            глобально
          </p>
          <div className="changesLight">
            <img src={exe9_21} className="exe9_21" />
            <img src={exe9_22} className="exe9_22" />
            <img src={exe9_23} className="exe9_23" />
          </div>
        </>
      )}

      {/*  */}

      {count === 15 && (
        <>
          <h4>
            Теперь давайте решим ещё одну задачу при помощи ГИС - получим геоинформацию и
            проанализируем её.
          </h4>
          <img src={trends} className="trends" />
          <p>
            При поступлении в ЛЭТИ перед Вами встанет задача успеть сходить в столовую между парами.
            Как правило это не особо большой промежуток времени, поэтому нужно торопиться{' '}
          </p>
        </>
      )}

      {count === 16 && (
        <>
          <p>
            На карте мы видим наш университет ЛЭТИ, а также 3 столовые, на которые можно также
            нажать и посмотреть дополнительную информацию. Нашей задачей будет найти расстояние от
            университета до каждой из них
          </p>
          <img src={distance} className="distance" />
        </>
      )}

      {count === 17 && (
        <>
          <p>
            Для того, чтобы измерить расстояние можно воспользоваться инструментом measurement
            (измерение)
          </p>
          <img src={distance2} className="distance2" />
        </>
      )}

      {count === 18 && (
        <>
          <p>
            После чего откроется дополнительный функционал, благодаря которому можно производить
            измерения расстояния.
          </p>
          <img src={distance3} className="distance3" />
          <div className="tools">
            <ul>
              <li>
                <img src={distance4} className="distance4" />
                <p>измерить линейное расстояние</p>
              </li>
              <li>
                <img src={distance5} className="distance5" />
                <p>измерить площадь участка (области)</p>
              </li>
              <li>
                <img src={distance6} className="distance6" />
                <p>удалить результат измерения</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {count === 19 && (
        <>
          <p>
            Найдите расстояния до всех столовых и определите самое минимальное (Чтобы посмотреть
            название столовой можно нажать на её метку).
          </p>
          <div className="answers">
            <Button
              value={'Кафе Moon'}
              onClick={checkCorrect}
              className={'btn btn-primary'}
              style={{ marginTop: '10px' }}
            />
            <Button
              value={'Нихао Москва'}
              onClick={checkCorrect}
              className={'btn btn-primary'}
              style={{ marginTop: '10px' }}
            />
            <Button
              value={'Кафе Остров'}
              onClick={checkCorrect}
              className={'btn btn-primary'}
              style={{ marginTop: '10px' }}
            />
          </div>
          {answerCorrect === false && <p>Почти</p>}
          {answerCorrect && (
            <p className="correctAnswer">Верно! ближайшая столовая на этой карте - Кафе Moon</p>
          )}

          {/* <button className="btn btn-primaty"></button> */}
        </>
      )}

      {count === 20 && (
        <>
          <h4>Попробуйте самостоятельно измерить расстояние от своего дома до ЛЭТИ</h4>
          {/* <img src={distance2} className="distance2" /> */}
          <p>Результат можете записать в поле ниже</p>
          <input placeholder="Ваш результат" className="form-control inputDistance"></input>
        </>
      )}

      {count === 21 && (
        <>
          <h4>
            Давайте познакомимся с инструментами поиска объектов на карте и измерения площадей
          </h4>
          {/* <img src={distance2} className="distance2" /> */}
          <p>
            Очень живописным местом на нашем замечательном аптекаском острове является Лопухинский
            сад. Давайте найдём его!
          </p>
          <img src={lopuhSad} className="lopuhSad" />
        </>
      )}

      {count === 22 && (
        <>
          <p>
            Для того, чтобы найти какой-либо объект на карте необходимо воспользоваться инструментом
            "Search" - (Поиск)
          </p>
          <img src={search} className="search" />
          <p>
            После чего откроется модальное окно в котором можно будет по названию найти нужный
            объект
          </p>
          <img src={search2} className="search2" />

          {/* <img src={lopuhSad} className="lopuhSad" /> */}
        </>
      )}

      {count === 23 && (
        <>
          <p>
            После выбора нужного объекта карта автоматически приблизиться к нему и откроется
            модальное окно
          </p>
          <img src={search3} className="search3" />

          {/* <img src={lopuhSad} className="lopuhSad" /> */}
        </>
      )}

      {count === 24 && (
        <>
          <p>
            По заданию необходимо найти площадь сада. Для этого воспользуемся уже знакомым
            инструментом - 'измерение площади участка'
          </p>
          <img src={distance5} className="distance5" />
          <p>
            При использовании этого инструмента необходимо по точкам "обводить" необходимый объект.
            Чем точнее происходит обведение объектов, тем точнее будет результат измерения
          </p>
          <img src={search4} className="search4" />
        </>
      )}

      {count === 25 && (
        <>
          <h4>
            Используя эту информацию попробуйте найти площадь Лопухинского сада и записать
            получившийся результат
          </h4>
          <input placeholder="Ваш результат" className="form-control inputDistance"></input>
          {/* <img src={search3} className="search3" /> */}

          {/* <img src={lopuhSad} className="lopuhSad" /> */}
        </>
      )}

      {count === 26 && (
        <>
          <h4>У автора данного задания получился такой результат:</h4>
          <img src={searchResult} className="searchResult" />
          <h5>В действительности же площадь сада занимает 57000 квадратных метров</h5>

          {/* <img src={lopuhSad} className="lopuhSad" /> */}
        </>
      )}
    </>
  );
};

export default Exercise9;
