import React from 'react';
import {Input, Button} from 'antd';
import Layout from '../../../utils/layout/service';

const Forgot = () => {
  return (
    <Layout>
      <div className='forgot'>
        <h1 className='title'>Forgot password?</h1>
        <div className='forgot-email'>Email</div>
        <Input placeholder='Email'/>
        <Button className='blue'>Send</Button>
      </div>
    </Layout>
  );
};

export default Forgot;
