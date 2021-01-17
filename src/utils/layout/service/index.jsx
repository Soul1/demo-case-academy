import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';
import {logoWhite} from '../../../common/images/main';
import './index.scss';

const Layout = ({page, children}) => {

  return <div className={cn('layout-auth', {'h-auto': page === 'Register'})}>
    <div className='layout-auth__logo'>
      <NavLink to='/'>
        <img src={logoWhite} alt='logo'/>
      </NavLink>
    </div>

    {page === 'Not Found'
      ? {children}
      : <div className={cn('layout-auth__window', {'display-none': !page})}>
        {children}
      </div>
    }
  </div>
}

const mstp = ({page}) => ({...page})

export default connect(mstp)(Layout);
