import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {card1, card2, card3, AlexeiEvdokimov, reload} from '../../common/images/main';
import {setCurrentPage, CURRENT_PAGE} from '../../redux/reducers/page';
import './index.scss';

const Main = ({setCurrentPage}) => {

  useEffect(() => {
    setCurrentPage(CURRENT_PAGE, 'Main')
  }, [])

  return (
    <div className='main'>
      <section className='welcome'>
        <div className='welcome__title title'>
          <h2 className='title-top'>Case Academy</h2>
          <h3 className='title-main'>
            Join the biggest case lovers community!
            No matter if you are a newbie or experienced caser – you are welcome!
          </h3>

        </div>
        <div className='welcome__cards'>
          <div className='welcome__cards-card'>
            <img className='welcome__cards-card__img' src={card1} alt='card'/>
            <div className='welcome__cards-card__title'>Learn</div>
            <p className='welcome__cards-card__text'>By doing and getting a feedback</p>
          </div>
          <div className='welcome__cards-card'>
            <img className='welcome__cards-card__img' src={card2} alt='card'/>
            <div className='welcome__cards-card__title'>Connect</div>
            <p className='welcome__cards-card__text'>With others and extend your professional network</p>
          </div>
          <div className='welcome__cards-card'>
            <img className='welcome__cards-card__img' src={card3} alt='card'/>
            <div className='welcome__cards-card__title'>Practice</div>
            <p className='welcome__cards-card__text'>Individually and with peers</p>
          </div>
        </div>
        <div className='welcome__btn flex-just-center'>
          <button className='btn'>Let's start</button>
        </div>
      </section>

      <section className='partners bg-img'>
        <div className='partners__inner'>
          <div className='partners__title title'>
            <h2 className='title-top'>Case partners</h2>
            <h3 className='title-main'>
              Extend your network and practice cases with partners. Get your dream job!
            </h3>
          </div>
          <div className='partners__btn flex-just-center'>
            <button className='btn'>Find partners</button>
          </div>
        </div>
      </section>

      <section className='challenge'>
        <div className='challenge__title title'>
          <h2 className='title-top'>Case Challenge</h2>
          <h3 className='title-main'>
            4 steps online case cracking
          </h3>
        </div>
        <div className='challenge__steps'>
          <div className='challenge__steps-inner'>
            <div className='challenge__steps-step'>
              <div className='challenge__steps-step__num'>1</div>
              <p className='challenge__steps-step__text'>Сase solving</p>
            </div>
            <div className='challenge__steps-line'/>
          </div>

          <div className='challenge__steps-inner'>
            <div className='challenge__steps-step'>
              <div className='challenge__steps-step__num'>2</div>
              <p className='challenge__steps-step__text'>Peers feedback</p>
            </div>
            <div className='challenge__steps-line'/>
          </div>

          <div className='challenge__steps-inner'>
            <div className='challenge__steps-step'>
              <div className='challenge__steps-step__num'>3</div>
              <p className='challenge__steps-step__text'>Feedback analysis</p>
            </div>
            <div className='challenge__steps-line'/>
          </div>

          <div className='challenge__steps-inner'>
            <div className='challenge__steps-step'>
              <div className='challenge__steps-step__num'>4</div>
              <p className='challenge__steps-step__text'>Case study webinar with McKinsey consultant</p>
            </div>
          </div>

        </div>
        <div className='challenge__btn flex-just-center'>
          <button className='btn'>Participate</button>
        </div>
      </section>

      <section className='users-countries bg-img'>
        <div className='users-countries__num'>1500+</div>
        <p className='users-countries__text'>users from 40 countries</p>
      </section>

      <section className='feedback-main'>

        <div className='feedback-main__img'>
          <img src={AlexeiEvdokimov} alt='Alexei Evdokimov'/>
        </div>

        <div className='feedback-main__inner'>
          <div className='feedback-main__inner-top'>
            <div className='feedback-main__inner-top__info'>
              <div className='feedback-main__inner-top__info-name'>Alexei Evdokimov</div>
              <div className='feedback-main__inner-top__info-job'>co-founder tbdbo agency</div>
            </div>
            <div className='feedback-main__inner-top__btn'>
              <button className='btn'>
                <img src={reload} alt='reload'/>
              </button>
            </div>
          </div>
          <div className='feedback-main__inner-line'/>
          <p className='feedback-main__inner-text'>
            Really enjoyed the variety and calibre of the speakers. Needless to say that the organisation was spotless. Would recommend to anyone who
            is working or interested in innovation.
          </p>
          <div className='feedback-main__inner-btn'>
            <button className='btn'>Registration</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const mstp = ({page}) => ({...page})

export default connect(mstp, {setCurrentPage})(Main)
