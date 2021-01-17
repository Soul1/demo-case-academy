import React, {useEffect} from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from 'antd';
import {NavLink} from 'react-router-dom';
import {CURRENT_PAGE} from '../../../redux/reducers/page';

const {Option} = Select;

export const FirstStep = ({setCurrentPage, setStep, setFinish}) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    setFinish(values)
    setStep(2)
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{width: 70}}>
        <Option value='+7'>+7</Option>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );

  useEffect(() => {
    setCurrentPage(CURRENT_PAGE, 'Register')
  }, [])

  return (
    <Form
      form={form}
      name='register'
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

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {type: 'email', message: 'The input is not valid E-mail!'},
          {required: true, message: 'Please input your E-mail!'}
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name='password'
        label='Password'
        rules={[
          {required: true, message: 'Please input your password!'},
          {
            validator: (_, value) => {
              if (/(?=.*[0-9])(?=.*[!@#$%+^&{}_*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$+%{}_^&*a-zA-Z]{6,}/g.test(value)) {
                return Promise.resolve()
              }
              return Promise.reject('The password must contain at least 8 characters (Latin letters, numbers and at least one character: ! * + % @ ^ & { } _ #)')
            }
          }
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({getFieldValue}) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[{required: true, message: 'Please input your phone number!'}]}
      >
        <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
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
          Sign up
        </Button>
      </Form.Item>
      <div className='auth-link'>
        <NavLink to='/login' className='auth-arrow-icon'>Already have an account? Log in</NavLink>
      </div>
    </Form>
  );
};
