import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {CaseInfo, Stars} from '../../../utils/supports';
import {arrowDown, arrowUp} from '../../../common/images/materials';
import arrow from '../../../common/images/auth/arrow-right.svg';
import './index.scss';

const files = [{title: 'Скачки напряжения.pdf', size: '76 мб'}, {title: 'Скачки напряжения.pdf', size: '76 мб'}, {title: 'Скачки напряжения.pdf', size: '76 мб'}]
const feedback = [
  {
    stars: 3,
    name: 'Коржавов Александр Сергеевич',
    text: 'Крупная компания, входящая в топ в своем сегменте российского рынка, строит центр обработки данных (ЦОД) для заказчика – государственной структуры. Заказчик для подрядчика очень важен – это системный, стратегический, ключевой клиент.'
  },
  {
    stars: 5,
    name: 'Максимов Сергй Леонидович',
    text: 'Крупная компания, входящая в топ в своем сегменте российского рынка, строит центр обработки данных (ЦОД) для заказчика – государственной структуры. Заказчик для подрядчика очень важен – это системный, стратегический, ключевой клиент.'
  }
]

const MyCases = ({onPage}) => {
  useEffect(()=> onPage('my-cases'), [])
  return (
    <div className='my-cases'>
      <Case title='Railway One'
            text='Ваш клиент – FastCom Group, крупный оператор телекоммуникационных сетей и мобильной связи. Его главный офис находится в России. Недавно FastCom вышла на российский рынок банковского обслуживания физических лиц, создав FastCom Bank. В настоящее время компания рассматривает варианты быстрого наращивания базы клиентов, которые пользуются банковскими услугами на повседневной основе. Клиент предложил вашей рабочей группе проанализировать возможные варианты расширения клиентской базы.'
            files={files}
            feedback={feedback}/>
    </div>
  );
};

export default MyCases;

const Case = ({title, text, files, feedback}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='case'>
      <div className='case-top'>
        <h3 className='case-top__title'>{title}</h3>
        <div className='case-top__arrow'>
          <img className={isShow ? 'arrow-up' : 'arrow-down'} src={isShow ? arrowUp : arrowDown} onClick={() => setIsShow(!isShow)} alt='arrow'/>
        </div>
      </div>
      {isShow &&
      <>
        <CaseInfo title='Загруженные файлы' text={text} files={files}/>

        <div className='case-feedback'>
          <div className='case-feedback__title'>Отзывы</div>
          {feedback.map(({stars, name, text}) => <Feedback stars={stars} name={name} text={text}/>)}
        </div>
      </>
      }
    </div>
  )
}

const Feedback = ({stars, name, text}) =>
  <div className='feedback'>
    <div className='feedback__stars'>
      <Stars stars={stars}/>
    </div>
    <div className='feedback__name'>
      <NavLink to='/profile'>
        {name}
        <img src={arrow} alt='arrow'/>
      </NavLink>
    </div>
    <p className='feedback__text'>
      {text}
      <span className='feedback__text-read-full'>(Read full revew)</span>
    </p>
  </div>
