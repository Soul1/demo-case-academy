import React, {useEffect} from 'react';
import {Button, Checkbox, Form, Input, Select} from 'antd';
import './index.scss';

const Profile = ({onPage}) => {
  const [form] = Form.useForm();
  useEffect(() => onPage('profile'), [])
  const onFinish = values => {

  };

  return (
    <div className='profile'>
      <Form
        form={form}
        name='profile'
        onFinish={onFinish}
        initialValues={{
          prefix: '+7',
        }}
        scrollToFirstError
      >

        <Form.Item
          name='firstName'
          label='First name'
          rules={[{required: true, message: 'Please input your First name!', whitespace: true}]}
        >
          <Input/>
        </Form.Item>


        <Form.Item
          name='lastName'
          label='Last name'
          rules={[{required: true, message: 'Please input your Last name!', whitespace: true}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item name='university' label='University'>
          <Input/>
        </Form.Item>
        <Form.Item name='faculty' label='Faculty'>
          <Input/>
        </Form.Item>
        <Form.Item name='year-of-end' label='Year of end'>
          <Input/>
        </Form.Item>
        <Form.Item name='country' label='Country'>
          <Input/>
        </Form.Item>
        <Form.Item
          name='language'
          label='Language'
          rules={[{required: true, message: 'Please select your country!'}]}>
          <Select className='ant-select-customize-input' placeholder='Please select a Language'>
            <Select.Option value='english'>English</Select.Option>
            <Select.Option value='russian'>Russian</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='about-me' label='Расскажите о себе'>
          <Input.TextArea placeholder='Свободная форма'/>
        </Form.Item>
        <Form.Item className='border-none' name='communication-methods' label='Предпочтительный способ связи' valuePropName='checked'>
          <div><Checkbox>Email</Checkbox></div>
          <div><Checkbox>Phone</Checkbox></div>
          <div><Checkbox>Social media</Checkbox></div>
        </Form.Item>

        <Form.Item className='border-none'>
          <Button className='blue mt30' htmlType='submit' shape='round'>
            Save changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
