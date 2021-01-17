import React, {useState, useEffect} from 'react';
import {Button} from 'antd';
import cn from 'classnames';
import {arrowDown, arrowUp, close} from '../../../common/images/materials';
import {avatar, report} from '../../../common/images/partners';
import {ashbin, add} from '../../../common/images/account';
import ModalCard from '../../../utils/modal-card';
import './index.scss';

const partner = {
  name: 'Marie-Thérèse Cassidy',
  avatar: avatar,
  status: 'I was added',
  lastActive: 'Несколько дней назад',
  cells: [
    {title: 'Предпочтительный вид связи', text: ['Email', 'Phone']},
    {title: 'University', text: 'Санкт-Петербургский государственный университет'},
    {title: 'Год окончаниия', text: '2008 год'},
    {
      title: 'About',
      text: 'Angie Yuanmalai, Associate Creative Director at Huge uncovers how user experience can change the way consumers and brands interact with each other. Huge is an experience design and digital marketing agency that provides services to Fortune 100 companies. They apply rapid prototyping, ongoing usability testing and iterative development to bridge the gap between the digital and physical experiences. Angie Yuanmalai will be talking about building and living a creative culture.'
    },
    {title: 'Language', text: ['English', 'Russian', 'Spanish']},
    {title: 'Tags', text: ['Preparing for an interview', 'I am looking for a team to participate']},
    {title: 'Case Challenge Participant', text: 'Участвует'}
  ]
}
const partner2 = {
  name: 'Robert Dertsyan',
  avatar: avatar,
  status: 'my contact',
  lastActive: 'Несколько дней назад',
  cells: [
    {title: 'Предпочтительный вид связи', text: ['Email', 'Phone']},
    {title: 'University', text: 'Санкт-Петербургский государственный университет'},
    {title: 'Год окончаниия', text: '2008 год'},
    {
      title: 'About',
      text: 'Angie Yuanmalai, Associate Creative Director at Huge uncovers how user experience can change the way consumers and brands interact with each other. Huge is an experience design and digital marketing agency that provides services to Fortune 100 companies. They apply rapid prototyping, ongoing usability testing and iterative development to bridge the gap between the digital and physical experiences. Angie Yuanmalai will be talking about building and living a creative culture.'
    },
    {title: 'Language', text: ['English', 'Russian', 'Spanish']},
    {title: 'Tags', text: ['Preparing for an interview', 'I am looking for a team to participate']},
    {title: 'Case Challenge Participant', text: 'Участвует'}
  ]
}
const partner3 = {
  name: 'Marina Markina',
  avatar: avatar,
  status: 'added',
  lastActive: 'Несколько дней назад',
  cells: [
    {title: 'Предпочтительный вид связи', text: ['Email', 'Phone']},
    {title: 'University', text: 'Санкт-Петербургский государственный университет'},
    {title: 'Год окончаниия', text: '2008 год'},
    {
      title: 'About',
      text: 'Angie Yuanmalai, Associate Creative Director at Huge uncovers how user experience can change the way consumers and brands interact with each other. Huge is an experience design and digital marketing agency that provides services to Fortune 100 companies. They apply rapid prototyping, ongoing usability testing and iterative development to bridge the gap between the digital and physical experiences. Angie Yuanmalai will be talking about building and living a creative culture.'
    },
    {title: 'Language', text: ['English', 'Russian', 'Spanish']},
    {title: 'Tags', text: ['Preparing for an interview', 'I am looking for a team to participate']},
    {title: 'Case Challenge Participant', text: 'Участвует'}
  ]
}
const partners = [partner, partner2, partner3]
const Contacts = ({onPage}) => {
  const [modal, setModal] = useState(null)
  useEffect(() => onPage('contacts'), [])

  return (
    <div className='contacts'>
      <div className='contacts__score'>Contacts: <span>{partners.length}/50</span></div>
      {partners.map(partner =>
        <div className='card'>
          <CardPartner {...partner} setModal={setModal}/>
        </div>)}
      {modal && <ModalCard reason={modal} setModal={setModal}/>}
    </div>
  );
};

export default Contacts;

const handlers = {
  'my contact': {handler: 'delete', btn: ashbin},
  'added': {handler: 'no add', btn: 'Отозвать'},
  'I was added': {handler: 'cancel', btn: close, btn2: add}
}

const CardPartner = ({name, avatar, lastActive, cells, status, setModal}) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='card-partner'>
      <div className='card-partner__avatar'>
        <img src={avatar} alt='avatar'/>
        {isShow && <div className='report' onClick={() => setModal('report')}>
          Report <img src={report} alt='report'/>
        </div>}
      </div>
      <div className='card-partner__info'>
        <div className='card-partner__info-wrapper'>
          <div className='card-partner__info-name' onClick={() => setIsShow(!isShow)}>
            {name}
            <img className={isShow ? 'arrow-up' : 'arrow-down'} src={isShow ? arrowUp : arrowDown} alt='arrow'/>
          </div>
          {status in handlers && handlers[status].handler === 'no add'
            ? <div className='added-text'>Вы отправили заявку и ожидаете подтверждения</div>
            : <div className='last-active'>
              Last active:<span>{lastActive}</span>
            </div>
          }

          {isShow && <div className='card-partner__info-cells'>
            {cells && cells.map(({title, text}) => <CardPartnerCell title={title} text={text}/>)}
          </div>}
        </div>
        <div className={cn('card-partner__info-btn', {'ml90': !isShow})}>
          {status in handlers && handlers[status].handler === 'no add'
            ? <Button onClick={() => setModal(handlers[status].handler)}>{handlers[status].btn}</Button>
            : <div className='btn-status'>
              <ButtonStatus btn={handlers[status].btn} btn2={handlers[status].btn2} status={handlers[status].handler} setModal={setModal}/>
              {handlers[status].handler === 'cancel' && <div className='btn-status__text'>Добавить в ответ</div>}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const ButtonStatus = ({btn, btn2, status, setModal}) =>
  <>
    {btn2 && <Button className={status === 'cancel' ? 'btn-cancel' : 'circle'} onClick={null}>
      <img src={btn2} alt='icon'/>
    </Button>}
    <Button className={status === 'cancel' ? 'btn-cancel' : 'circle'} onClick={() => setModal(status)}>
      <img src={btn} alt='icon'/>
    </Button>
  </>

const CardPartnerCell = ({title, text}) =>
  <div className='card-partner-cell'>
    <h5 className='card-partner-cell__title'>
      {title}
    </h5>
    <p className={cn('card-partner-cell__text', {'tags': title === 'Tags'}, {'participant': title === 'Case Challenge Participant'})}>
      {title !== 'Tags' && (Array.isArray(text) ? text.join(', ') : text)}
      {title === 'Tags' && text.map(t => <div>{t}</div>)}
    </p>
  </div>
