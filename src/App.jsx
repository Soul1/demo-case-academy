import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Forgot from "./components/Auth/Forgot";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CaseChallenge from "./components/CaseChallenge";
import Cases from "./components/Cases";
import Main from './components/Main';
import Materials from './components/Materials';
import Buddies from './components/Buddies';
import PrivateAccount from './components/PrivateAccount';
import MainLayout from './utils/layout/main';
import NotFound from './utils/service';

const App = ({isAuth}) => {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact render={() =>
          <MainLayout>
            <Main/>
          </MainLayout>}/>

        <Route path='/cases' exact render={() =>
          <MainLayout>
            <Cases/>
          </MainLayout>}/>

        <Route path='/case-challenge' exact render={() =>
          <MainLayout>
            <CaseChallenge/>
          </MainLayout>}/>

        <Route path='/materials' render={() =>
          <MainLayout>
            <Materials/>
          </MainLayout>}/>

        <Route path='/buddies' render={() =>
          <MainLayout>
            <Buddies/>
          </MainLayout>}/>

        {isAuth
          ? <Route path='/account' render={() =>
            <MainLayout>
              <PrivateAccount/>
            </MainLayout>}/>
          : <>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/login/forgot' exact render={() => <Forgot/>}/>
            <Route path='/register' render={() => <Register/>}/>
          </>
        }

        <Route path='*' render={() => <NotFound/>}/>
      </Switch>
    </div>
  );
}

const mstp = ({user}) => ({isAuth: user.isAuth})

export default connect(mstp)(App)
