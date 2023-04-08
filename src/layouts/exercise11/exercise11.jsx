import React, { useState } from 'react';
import './exercise11.css';
import Button from '../../components/button/Button';
import popUpWindow from '../../../public/img/exe1.png';
import layer from '../../../public/img/exe2.png';
import layer2 from '../../../public/img/exe3.png';
import prop from '../../../public/img/exe4.png';
import popUp2 from '../../../public/img/exe5.png';
import popUp3 from '../../../public/img/exe6.png';
import popUp4 from '../../../public/img/exe7.png';
import popUp5 from '../../../public/img/exe8.png';
import popUp6 from '../../../public/img/exe9.png';
import popUp7 from '../../../public/img/exe10.png';
import popUp8 from '../../../public/img/exe11.png';
import trends from '../../../public/img/trends.png';
import distance from '../../../public/img/exe12.png';
// import distance1 from '../../../public/img/exe13.png';
import distance2 from '../../../public/img/exe14.png';
import distance3 from '../../../public/img/exe15.png';
import distance4 from '../../../public/img/exe16.png';
import distance5 from '../../../public/img/exe17.png';
import distance6 from '../../../public/img/exe18.png';

const Exercise11 = ({ count }) => {
  const [answerCorrect, setAnswerCorrect] = useState(null);

  const checkCorrect = (e) => {
    e.preventDefault();
    const { target } = e;
    const answer = target.innerHTML;

    answer === 'Кафе Остров' ? setAnswerCorrect(true) : setAnswerCorrect(false);
  };

  return (
    <div className="wrapperExe">
      {count === 0 && (
        <>
          <p>
            Перед вами карта части аптекарского острова, на котором распологается университет
            СПбГЭТУ "ЛЭТИ". Синяя метка университета ярко подсвечивается, нажав на неё можно увидеть
            всплывающее окно - PopUp. В этом окне отображается какая-либо информация об объекте к
            которому привязана метка.
          </p>
          <img src={popUpWindow} className="popUpWindow1" />
          <p>Сейчас в PopUp только наименование. Давайте добавим в него изображение</p>
        </>
      )}

      {count === 1 && (
        <>
          <p>Для этого необходимо зайти в раздел Layer / Слои</p>
          <img src={layer} className="layer" />
          <p>Выбрать слой LETI и нажать на кнопку Show properties (показать свойства) </p>
          <img src={layer2} className="layer2" />
        </>
      )}

      {count === 2 && (
        <>
          <p>
            После чего справа откроется контекстное меню, выберется пункт properties (свойства)
            Чтобы редактировать метки нужно в разделе Sketch features (черты эскиза) нажать на ручку
            у той метки, которую необходимо редактировать.
          </p>
          <img src={prop} className="prop" />
          {/* <p>Выбрать слой LETI и нажать на кнопку Show properties (показать свойства) </p>
          <img src={layer2} className="layer2" /> */}
        </>
      )}

      {count === 3 && (
        <>
          <p>
            Далее для редактирования popUp и информации, которую он в себе несёт необходимо нажать
            на кнопку Pop-up
          </p>
          <img src={popUp2} className="popUp2" />
          {/* <p>Мы попали в редактор Pop-up метки, здесь можно </p>
          <img src={popUp3} className="popUp3" /> */}
        </>
      )}

      {count === 4 && (
        <>
          <p>Мы попали в редактор Pop-up метки. </p>
          <img src={popUp3} className="popUp3" />
          <p> Здесь можно добавлять и редактировать</p>
          <ul className="popUpUl">
            <li>Title (заголовок)</li>
            <li>Text (текст)</li>
            <li>Image (изображения)</li>
          </ul>
        </>
      )}

      {count === 5 && (
        <>
          <p>
            Вернемся к задаче, стоящей перед нами. Необходимо добавить изображение к всплывающему
            окну. Чтобы это сделать воспользуемся кнопкой add content (добавить содержимое). После
            чего выберем изображение
          </p>
          <img src={popUp4} className="popUp4" />
        </>
      )}

      {count === 6 && (
        <>
          <div className="wrapperExe6">
            <img src={popUp5} className="popUp5" />
            <ul className="popUpUl">
              <li>URL - путь к изображению в интернете</li>
              <li>Title - заголовок</li>
              <li>Caption - подпись</li>
              <li>Alternative text - описание изображения</li>
            </ul>
          </div>
        </>
      )}

      {count === 7 && (
        <>
          <p>
            Чтобы выбрать изображение необходимо открыть дополнительную вкладку в браузере. Найти и
            выбрать любую картинку, нажатием с удержанием вызвать контекстное меню и выбрать в нем
            копировать URL картинки
          </p>
          <img src={popUp6} className="popUp6" />
          <p>
            или скопировать эту -
            https://etu.ru/assets/cache/images/ru/nauchnaya/novosti/1280x800-dscf2014-2.cb9.jpg
          </p>
        </>
      )}

      {count === 8 && (
        <>
          <p>
            После того, как скопировали ссылку, необходимо поместить её в нужное поле URL. Заполнив
            остальные поля, получим вот такое модальное окно Pop-up, которое будет появляться при
            нажатии на метку.
          </p>
          <img src={popUp7} className="popUp7" />
          <h5>Не забудьте нажать Done!</h5>
        </>
      )}

      {count === 9 && (
        <>
          <p>
            Помимо наполнения Pop-up (а) информацией его можно также настроить отображение на карте
            с точки зрения визуала
          </p>
          <p>
            Перейдя на вкладку Effects (эффекты) можно настроить отображение метки на свой вкус,
            выбирая различные эффекты отображения, например: размытие, тень, сепия.
          </p>
          <img src={popUp8} className="popUp8" />
          {/* <h5>Не забудьте нажать Done!</h5> */}
        </>
      )}

      {count === 10 && (
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

      {count === 11 && (
        <>
          <p>
            На карте также распологаются 3 столовые, на которые можно также нажать и посмотреть
            дополнительную информацию. Нашей задачей будет найти расстояние от университета до
            каждой из них
          </p>
          <img src={distance} className="distance" />
        </>
      )}

      {count === 12 && (
        <>
          <p>
            Для того, чтобы измерить расстояние можно воспользоваться инструментом measurement
            (измерение)
          </p>
          <img src={distance2} className="distance2" />
        </>
      )}

      {count === 13 && (
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
                <p>измерить расстояние участка (области)</p>
              </li>
              <li>
                <img src={distance6} className="distance6" />
                <p>удалить результат измерения</p>
              </li>
            </ul>
          </div>
        </>
      )}

      {count === 14 && (
        <>
          <p>
            Найдите расстояния до всех столовых и определите самое минимальное (Чтобы посмотреть
            название столовой можно нажать на её метку)
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
    </div>
  );
};

export default Exercise11;
