import React, {useState} from 'react';
import {Input, Button} from 'antd';
import cn from 'classnames';
import {close} from '../../common/images/account';
import './index.scss';

const modal = [
  {
    reason: 'delete',
    title: 'Вы уверены что хотите удалить контакты партнера?',
    text: 'Ваша контактная информация тоже будет удалена из аккаунта партнера.',
    btn1: 'Удалить',
    btn2: 'Нет, я передумал'
  },
  {reason: 'cancel', title: 'Вы уверены, что хотите отозвать заявку на добавление в контакты?', btn1: 'Да, уверен', btn2: 'Нет не уверен'},
  {
    reason: 'no add',
    title: 'Вы уверены что не хотите добавить контакты партнера?',
    text: 'Партнер тоже не увидит ваши контактные данные',
    btn1: 'Да, уверен',
    btn2: 'Нет, хочу добавить'
  }
]

const ModalCard = ({reason, setModal}) => {
  return (
    <div className={cn('modal-card', {'dn': !reason})}>
      <div className='modal-card__modal'>
        <div className='modal-card__close' onClick={() => setModal(null)}>
          <img src={close} alt='close'/>
        </div>
        {reason === 'report'
          ? <Report setModal={setModal}/>
          : modal.map(m => m.reason === reason && <ContactChange {...m}/>)}
      </div>
    </div>
  )
}

export default ModalCard;

const ContactChange = ({title, text, btn1, btn2}) => {
  return (
    <div className='contact-change'>
      <div className='contact-change__title'>
        {title}
      </div>
      <div className='contact-change__text'>
        {text}
      </div>
      <Button className='blue'>
        {btn1}
      </Button>
      <Button>
        {btn2}
      </Button>
    </div>
  )
}

const Report = ({setModal}) => {
  const [text, setText] = useState('')
  const [isSent, setIsSent] = useState(false)
  return (
    <div className='report'>
      {!isSent ?
        <>
          <div className='report__title'>Report</div>
          <p className='report__text'>Опишите причину жалобы. Например, нецензурная лексика в описании профиля.</p>
          <Input.TextArea placeholder='Текст жалобы' value={text} onChange={setText}/>
          <Button className='blue' onClick={() => setIsSent(true)}>Отправить</Button>
        </>
        : <>
          <div className='report__title'>Сообщение отправлено</div>
          <p className='report__text'>Ваше сообщение отправлено команде Case Academy. Мы рассмотрим заявку и предпримем необходимые меры. Спасибо за бдительность.</p>
          <Button onClick={() => setModal(null)}>Закрыть</Button>
        </>
      }
    </div>
  )
}
