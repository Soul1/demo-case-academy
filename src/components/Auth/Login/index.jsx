import React, {useEffect} from 'react';
import {Form, Input, Button} from 'antd';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Layout from '../../../utils/layout/service';
import {setCurrentPage, CURRENT_PAGE} from '../../../redux/reducers/page';
import {setUserIsAuth, USER_IS_AUTH} from '../../../redux/reducers/user';
import {Key} from '../../../utils/icon/key';

const Login = ({setCurrentPage, setUserIsAuth}) => {
  const onFinish = values => {
    console.log('Finish:', values);
    setUserIsAuth(USER_IS_AUTH, true)
  };

  useEffect(() => setCurrentPage(CURRENT_PAGE, 'Log in'), [])

  return (
    <Layout>
      <div className='login'>
        <h1 className='title'>Log in</h1>
        <Form
          name='login'
          className='login-form'
          initialValues={{remember: true}}
          onFinish={onFinish}>

          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder='Email'/>
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[{required: true, message: 'Please input your password!'}]}>
            <Input.Password placeholder='Password'/>
          </Form.Item>

          <div className='login-form-forgot'>
            <Form.Item className='border-none'>
              <NavLink className='login-link' to='/login/forgot'>
                <Key className='site-form-item-icon'/>
                Forgot password
              </NavLink>
            </Form.Item>
          </div>


          <Form.Item className='border-none'>
            <Button className='blue mt30' htmlType='submit' shape='round' size='large'>
              Log in
            </Button>
          </Form.Item>
          <div className='auth-link'>
            <NavLink to='/register' className='auth-arrow-icon'>No account? Sign up</NavLink>
          </div>

        </Form>
      </div>
    </Layout>
  );
};

export default connect(null, {setCurrentPage, setUserIsAuth})(Login);
