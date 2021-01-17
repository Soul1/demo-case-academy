import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Slider from 'react-slick';
import cn from 'classnames';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {setCurrentPage, CURRENT_PAGE} from '../../../redux/reducers/page';
import {setUserIsAuth, USER_IS_AUTH} from '../../../redux/reducers/user';
import {avatar, facebook, instagram, linkedIn, logo, logoCompany, logoWhite, logoMckinsey, slide1, slide2, twitter, youtube} from '../../../common/images/main';
import './index.scss';

const Layout = ({page, setCurrentPage, isAuth, setUserIsAuth, children}) => {
  const [isMenuShow, setIsMenuShow] = useState(false)

  return (
    <div className='layout wrapper container'>
      <div className='content'>
        <header className='header'>
          <div className='header__top'>
            <NavLink className='header__top-link' to='/'>
              <img className='logo' src={logo} alt='logo' onClick={() => setCurrentPage(CURRENT_PAGE, 'Main')}/>
            </NavLink>
            <menu className='menu'>
              <ul className='menu-list'>
                <li className='menu-list__item' onClick={() => setCurrentPage(CURRENT_PAGE, 'Case-Challenge')}>
                  <NavLink className='menu-list__item-link' to='/cases'>Case challenge</NavLink>
                </li>
                <li className='menu-list__item' onClick={() => setCurrentPage(CURRENT_PAGE, 'Buddies')}>
                  <NavLink className='menu-list__item-link' to='/buddies'>Buddies</NavLink>
                </li>
                <li className='menu-list__item' onClick={() => setCurrentPage(CURRENT_PAGE, 'About')}>
                  <NavLink className='menu-list__item-link' to='/about'>About</NavLink>
                </li>
                <li className='menu-list__item' onClick={() => setCurrentPage(CURRENT_PAGE, 'Materials')}>
                  <NavLink className='menu-list__item-link' to='/materials'>Materials</NavLink>
                </li>
              </ul>
            </menu>
            {isAuth ?
              <div className='user' onClick={() => setIsMenuShow(!isMenuShow)}>
              <div className={page === 'Main' ? 'user__logo': 'user__name'}>
                {page === 'Main' ? <img src={logoMckinsey} alt='logo-mcKinsey'/> : 'Diego Otero Iglesias'}
              </div>
              <img className='user__avatar' src={avatar} alt='avatar'/>
              <div className={cn('user-menu', {'dn': !isMenuShow})}>
                <ul className='user-menu__lists'>
                  <li className='user-menu__lists-list'><NavLink to='/account/contacts'>Contacts</NavLink></li>
                  <li className='user-menu__lists-list'><NavLink to='/account/profile'>Profile</NavLink></li>
                  <li className='user-menu__lists-list'><NavLink to='/account/my-cases'>My Cases</NavLink></li>
                  <li className='user-menu__lists-list'><NavLink to='/account/settings'>Settings</NavLink></li>
                  <li className='user-menu__lists-list' onClick={() => setUserIsAuth(USER_IS_AUTH, false)}>
                    <NavLink to='/login'>Sign out</NavLink>
                  </li>
                </ul>
              </div>
            </div>
              :
              <div className='authentication'>
                <NavLink to='/login'>Login</NavLink>
                <Button className='blue'>Join</Button>
              </div>
            }
          </div>

          {page === 'Main' && <div className='header__slider'><HeaderSlider/></div>}

        </header>

        <div className='layout-child'>
          {children}
        </div>
      </div>

      <footer className='footer'>
        <div className='footer__top'>
          <div className='footer__top-logo'>
            <img className='logo' src={logoWhite} alt='logo'/>
          </div>

          <div className='footer__top-social'>
            <p className='footer__top-social__text'>Follow us on social media</p>
            <div className='footer__top-social__links'>
              <a className='footer__top-social__links-link' href='#'>
                <img src={youtube} alt='youtube'/>
              </a>
              <a className='footer__top-social__links-link' href='#'>
                <img src={facebook} alt='facebook'/>
              </a>
              <a className='footer__top-social__links-link' href='#'>
                <img src={linkedIn} alt='linkedIn'/>
              </a>
              <a className='footer__top-social__links-link' href='#'>
                <img src={twitter} alt='twitter'/>
              </a>
              <a className='footer__top-social__links-link' href='#'>
                <img src={instagram} alt='instagram'/>
              </a>
            </div>
          </div>

          <div className='footer__top-logo-company'>
            <NavLink className='footer-link' to='/main'>
              <img className='logo' src={logoCompany} alt='logo company' onClick={() => setCurrentPage(CURRENT_PAGE, 'Main')}/>
            </NavLink>
          </div>
        </div>
        <div className='footer__info'>
          <div className='footer__info-copy'>© 1996-2020 McKinsey & Company</div>
          <div className='footer__info-inner'>
            <a href='https://www.mckinsey.com/privacy-policy' target='_blank'>
              <div className='footer__info-inner__private'>Privacy policy</div>
            </a>
            <a href='https://www.mckinsey.com/terms-of-use' target='_blank'>
              <div className='footer__info-inner__terms'>Terms of use</div>
            </a>
          </div>
          <a href='https://www.mckinsey.com/ru/careers' target='_blank'>
            <div className='footer__info-career'>McKinsey&Company career →</div>
          </a>
        </div>
      </footer>
    </div>
  );
};

const mstp = (state) => ({...state.page, isAuth: state.user.isAuth})

export default connect(mstp, {setCurrentPage, setUserIsAuth})(Layout)

const HeaderSlider = () => {
  const slides = [
    {bgi: slide1, title: 'solve cases online at case academy'},
    {bgi: slide2, title: 'find partners to solve cases'}
  ]
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      {slides.map(({bgi, title}) => <Slide key={title} bgi={bgi} title={title}/>)}
    </Slider>
  )
}

const Slide = ({bgi, title}) =>
  <div className='header__slider-slide bg-img' style={{backgroundImage: `url(${bgi})`}}>
    <p className={cn('header__slider-slide__text',
      {'header__slider-slide__text--left': bgi.includes('slide-1')},
      {'header__slider-slide__text--right': bgi.includes('slide-2')})}>
      {title}
    </p>
  </div>
