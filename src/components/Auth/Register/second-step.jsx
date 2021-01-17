import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import {Button, Checkbox, Form, Input, Switch, Select} from 'antd';
import Avatar from '../../../utils/avatar';

export const SecondStep = ({step, setFinish, initials, name}) => {
  const [form] = Form.useForm();
  const [src, setSrc] = useState(null)
  const onFinish = values => {
    setFinish(values)
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='second-step'>
      <Avatar src={src} setSrc={setSrc} initials={initials}/>
      <h3 className='second-step__name'>{name}</h3>
      <Form
        form={form}
        name='register'
        onFinish={onFinish}
        scrollToFirstError
      >
        <div className='steps'>
          <div className={cn('step', {'current-step': step === 2})}/>
        </div>

        <Form.Item
          name='language'
          label='Language'
          rules={[{required: true, message: 'Please select your country!'}]}>
          <Select className='ant-select-customize-input' placeholder='Please select a Language'>
            <Select.Option value='english'>English</Select.Option>
            <Select.Option value='russian'>Russian</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='university' label='University'>
          <Input/>
        </Form.Item>


        <Form.Item name='year-of-end' label='Year of end'>
          <Input/>
        </Form.Item>

        <Form.Item name='Social-media-contacts' label='Social media contacts'>
          <Input/>
        </Form.Item>

        <Form.Item className='border-none' name='tags' label='Tags'>
          <div><Checkbox>Networking</Checkbox></div>
          <div><Checkbox>Preparing for an interview</Checkbox></div>
          <div><Checkbox>I am looking for a team</Checkbox></div>
        </Form.Item>

        <Form.Item name='about-me' label='Расскажите о себе'>
          <Input.TextArea placeholder='Свободная форма'/>
        </Form.Item>

        <Form.Item className='border-none' name='communication-methods' label='Предпочтительный способ связи' valuePropName='checked'>
          <div><Checkbox>Email</Checkbox></div>
          <div><Checkbox>Phone</Checkbox></div>
          <div><Checkbox>Social media</Checkbox></div>
        </Form.Item>

        <Form.Item className='border-none' name='switch' valuePropName='checked'>
          <div className='search-access'>
            <div className='search-access__title'>Доступен для поиска</div>
            <Switch/>
          </div>
          <div className='search-access__text'>Откройте профиль для поиска, чтобы дать возможность другим участникам платформы просматривать вашу анкету, отправлять вам запрос на добавление в друзья и совместно решать кейсы.</div>

        </Form.Item>

        <Form.Item
          className='border-none'
          name='agreement'
          valuePropName='checked'
          rules={[{validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement')}]}>

          <Checkbox>
            I have read and agree to the <a href='https://www.mckinsey.com/terms-of-use' target='_blank' rel='noreferrer'>Terms of Use</a>, Rules of Platform
            and <a href='https://www.mckinsey.com/privacy-policy' target='_blank' rel='noreferrer'>Privacy Policy.</a>
          </Checkbox>
        </Form.Item>

        <Form.Item
          className='border-none'
          name='personal data'
          valuePropName='checked'
          rules={[{validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement')}]}>

          <Checkbox>
            I give my consent to the processing of my personal data.
          </Checkbox>
        </Form.Item>

        <Form.Item className='border-none'>
          <Button className='blue mt30' htmlType='submit' shape='round'>
            Сохранить данные
          </Button>
          <Button className='mt30' htmlType='submit' shape='round'>
            Заполнить позже
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};



