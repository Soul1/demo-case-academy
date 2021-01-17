import React, {useEffect} from 'react';
import {Checkbox, Button} from 'antd';
import './index.scss';

const options = ['Уведомление о добавление в контакты', 'Уведомления о отзывах к решению', 'Новостная рассылка']

const Settings = ({onPage}) => {
  useEffect(() => onPage('settings'), [])
  return (
    <div className='settings'>
      <div className='settings__label'>
        Уведомления по Email
      </div>
      <Checkbox.Group options={options}/>
      <div className='settings__btn'>
        <Button className='blue'>Save changes</Button>
      </div>
    </div>
  );
};

export default Settings;
