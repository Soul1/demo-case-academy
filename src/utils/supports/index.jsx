import React from 'react';
import {Switch, Input} from 'antd';
import Star from '../icon/Star';
import {pdf} from '../../common/images/account';
import {close} from '../../common/images/partners';
import './index.scss';

export const File = ({title, size}) =>
  <div className='file'>
    <img src={pdf} alt='pdf'/>
    <div className='file__info'>
      <h5 className='file__info-title'>{title}</h5>
      <div className='file__info-size'>Размер файла: {size}</div>
    </div>
  </div>

export const SelectItem = ({filter, placeholder, dropSelectFilter}) =>
  <div className='select-item'>
    <div className='select-item__text'>
      {filter}
    </div>
    <div className='select-item__drop' onClick={() => dropSelectFilter(placeholder, filter)}>
      <img src={close} alt='close'/>
    </div>
  </div>

export const CaseInfo = ({text, files, title}) =>
  <>
    <div className='case-text'>
      <p>{text}</p>
    </div>
    <div className='case-files'>
      <div className='case-files__title'>{title}</div>
      <div className='case-files__main'>
        {files.map(({title, size}) => <File title={title} size={size}/>)}
      </div>
    </div>
  </>

export const TextArea = ({text, setText}) =>
  <div className='textarea'>
    <div className='textarea__title'>Ваш комментарий</div>
    <Input.TextArea placeholder='Свободная форма' value={text} onInput={e => setText(e.target.value)}/>
    <div className='textarea__words'>Всего символов {text.length} / 5000</div>
  </div>

export const Stars = ({stars}) => {
  return Array(7).fill(0).map((_, index) => index < stars ? <Star fill='#feda00'/> : <Star/>)
}
export const SearchAccess = () =>
  <>
    <div className='search-access'>
      <div className='search-access__title'>Доступен для поиска</div>
      <Switch/>
    </div>
    <div className='search-access__text'>
      Откройте профиль для поиска,
      чтобы дать возможность другим участникам платформы просматривать вашу анкету,
      отправлять вам запрос на добавление в друзья и совместно решать кейсы.
    </div>
  </>
