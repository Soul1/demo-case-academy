import React, {useState} from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {Switch, Route, NavLink} from 'react-router-dom';
import Avatar from '../../utils/avatar';
import {SearchAccess} from '../../utils/supports';
import Contacts from './Contacts';
import MyCases from './MyCases';
import Profile from './Profile';
import Settings from './Settings';
import {pen} from '../../common/images/account';
import './index.scss';

const menu = [
  {tab: 'Contacts', page: 'contacts'},
  {tab: 'Profile', page: 'profile'},
  {tab: 'My cases', page: 'my-cases'},
  {tab: 'Settings', page: 'settings'}
]

const PrivateAccount = () => {
  const [currentShowPage, setCurrentShowPage] = useState('contacts')
  const [src, setSrc] = useState(null)

  return (
    <div className='account'>
      <div className='account__top'>
        <div className='flex-align-center'>
          <div className='account__top-avatar'>
            <Avatar src={src} setSrc={setSrc} initials='NMR' icon={pen}/>
          </div>
          <div className='account__top-name'>
            Nepomuceno María Remedios
          </div>
        </div>
        {currentShowPage === 'profile' && <div className='account__top-switch'><SearchAccess/></div>}
      </div>
      <div className='account__main'>
        <div className='account__main-menu'>
          <ul>
            <li className={cn('account__main-menu__list', {'color-black': 'contacts' === currentShowPage})}><NavLink to='contacts'>Contacts</NavLink></li>
            <li className={cn('account__main-menu__list', {'color-black': 'profile' === currentShowPage})}><NavLink to='profile'>Profile</NavLink></li>
            <li className={cn('account__main-menu__list', {'color-black': 'my-cases' === currentShowPage})}><NavLink to='my-cases'>My cases</NavLink></li>
            <li className={cn('account__main-menu__list', {'color-black': 'settings' === currentShowPage})}><NavLink to='settings'>Settings</NavLink></li>
          </ul>
        </div>
        <div className='account__main-wrapper'>
          <Switch>
            <Route path='/account/contacts' render={() => <Contacts onPage={setCurrentShowPage}/>}/>
            <Route path='/account/profile' render={() => <Profile onPage={setCurrentShowPage}/>}/>
            <Route path='/account/my-cases' render={() => <MyCases onPage={setCurrentShowPage}/>}/>
            <Route path='/account/settings' render={() => <Settings onPage={setCurrentShowPage}/>}/>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mstp = ({page}) => ({...page})

export default connect(mstp)(PrivateAccount);
