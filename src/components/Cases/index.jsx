import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {CaseInfo} from '../../utils/supports';
import {arrowDown, arrowUp} from '../../common/images/materials';
import {defaultCasePreview} from '../../common/images/case-challenge';
import {CaseClose, Feedback, LastStep, Solutions, YourSolution} from './Footer';
import './index.scss';

const op = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
}
const files = [{title: 'Скачки напряжения.pdf', size: '76 мб'}, {title: 'Скачки напряжения.pdf', size: '76 мб'}, {title: 'Скачки напряжения.pdf', size: '76 мб'}];
const text = 'Ваш клиент – FastCom Group, крупный оператор телекоммуникационных сетей и мобильной связи. Его главный офис находится в России. Недавно FastCom вышла на российский рынок банковского обслуживания физических лиц, создав FastCom Bank. В настоящее время компания рассматривает варианты быстрого наращивания базы клиентов, которые пользуются банковскими услугами на повседневной основе. Клиент предложил вашей рабочей группе проанализировать возможные варианты расширения клиентской базы.'
const Cases = ({imgTitle}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isShow, setIsShow] = useState(false)
  const [stepDate, setStepDate] = useState(new Intl.DateTimeFormat('ru-RU', op).format(new Date()))

  return (
    <>
      <div className='cases'>
        <div className='cases__top'>
          <div className='cases__top-card'>
            <div className='cases__top-card__img'>
              <h5 className='cases__top-card__img-title'>{imgTitle || 'Natural Resourses'}</h5>
              <img src={defaultCasePreview} alt='preview'/>
            </div>
            <div className='cases__top-card__info'>
              <h3 className='cases__top-card__info-subtitle'>Operational improvements</h3>
              <h2 className='cases__top-card__info-title'>Elite Furniture</h2>
            </div>
          </div>
        </div>
        <div className='cases__description flex-start-between'>
          <div className='cases__description-title' onClick={() => setIsShow(!isShow)}>
            Описание
            <img className={isShow ? 'arrow-up' : 'arrow-down'} src={isShow ? arrowUp : arrowDown} alt='arrow'/>
          </div>
          {isShow && <div className='cases__description-main'>
            <CaseInfo text={text} files={files} title='Файлы к кейсу'/>
          </div>}
        </div>
        <div className='cases__steps'>
          <Steps step={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
      </div>
      <div className='cases__case-challenge'>
        <NavLink to='/case-challenge'>Past Case Challenges</NavLink>
      </div>
    </>
  );
};

export default Cases;

const Steps = ({step, setCurrentStep}) => {
  return (
    <div className='steps'>
      {step in steps && steps[step]({setCurrentStep})}
    </div>
  )
}

const TitleStep = ({title, text, children}) => {
  return (
    <div className='title-step'>
      <h2 className='title-step__title'>{title}</h2>
      {text && <p className='title-step__text'>{text}</p>}
      {children && <div className='title-step__child'>{children}</div>}
    </div>
  )
}

const StepInfo = ({step, text}) =>
  <div className='step-info'>
    <div className='step-info__current-step'>Этап {step}/4</div>
    <div className='step-info__allotted-date'>{text ? text : '07.12.2020 — 04.01.2021'}</div>
    <div className='step-info__left-date'>Осталось времени: <span>24 дня 4 часа</span></div>
  </div>

const partners = [
  {name: 'Самойлова Павла', link: '', decision: ''},
  {name: 'Старцева Евгения Павловна', link: '', decision: ''},
  {name: 'Коржавов Александр Сергеевич', link: '', decision: ''},
  {name: 'Константинопольский Константин Константинович', link: '', decision: ''},
  {name: 'Шапотатьева Ивана', link: '', decision: ''},
]

const steps = {
  1: ({setCurrentStep}) =>
    <>
      <div className='step step-first'>
        <StepInfo step={1}/>
        <TitleStep title='Решаем кейс' text='На это этапе Вам предстоит ответить на кейс: написать текст, или приложить файл'/>
      </div>
      <YourSolution setCurrentStep={setCurrentStep}/>
    </>,
  2: ({setCurrentStep}) =>
    <>
      <div className='step step-second'>
        <StepInfo step={2}/>
        <TitleStep title='Оценка работ' text='На этом этапе Вам предстоит оценить от трёх решений. Напишите, пожалуйста отзыв каждому из них, и поставьте оненку от 1 до 7.'/>
      </div>
      <Solutions partners={partners} setCurrentStep={setCurrentStep}/>
    </>,
  3: ({setCurrentStep}) =>
    <>
      <div className='step step-third'>
        <StepInfo step={3}/>
        <TitleStep title='Оценка работ' text='На этом этапе Вам предстоит оценить до 3 отзывов. Были ли он полезен для Вас?'/>
      </div>
      <Feedback partners={partners} setCurrentStep={setCurrentStep}/>
    </>,
  4: ({setCurrentStep}) =>
    <>
      <div className='step step-fourth'>
        <StepInfo step={4} text='12 ноября в 19:00 приглашаем вас на онлайн-разбор кейса'/>
        <TitleStep title='Разбор кейса с консультантом МакКинзи'>
          <NavLink to='#'>Ссылка на вебинар</NavLink>
          <div className='title-step__child-password'>Пароль для входа: <span>2020academy</span></div>
        </TitleStep>
      </div>
      <LastStep setCurrentStep={setCurrentStep}/>
    </>,
  5: () =>
    <div className='step-five'>
      <CaseClose/>
    </div>
}
