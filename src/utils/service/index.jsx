import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {setCurrentPage, CURRENT_PAGE} from '../../redux/reducers/page';
import './index.scss';

const NotFound = ({setCurrentPage}) => {
  useEffect(() => {
    setCurrentPage(CURRENT_PAGE, 'Not Found')
  }, [])
  return (
        <div className='not-found'>
          <h1 className='not-found__title'>404</h1>
          <h2 className='not-found__subtitle'>Page not found</h2>
          <p className='not-found__text'>Sorry! We’re currently busy making our website even better.
            Hold tight, we’ll be back very shortly.</p>
          <div className='not-found__btn'>
            <Button><NavLink to='/'>Go to mainpage</NavLink></Button>
          </div>
        </div>
  )
}

export default connect(null, {setCurrentPage})(NotFound);
