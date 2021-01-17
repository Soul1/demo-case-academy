import React, {useState} from 'react';
import cn from 'classnames';
import {Button, Input, Upload} from 'antd';
import {NavLink} from 'react-router-dom';
import {dislike, like} from '../../../common/images/case-challenge';
import {videoPreview} from '../../../common/images/case-challenge';
import {CaseInfo, Stars, TextArea} from '../../../utils/supports';
import './index.scss';

export const YourSolution = ({setCurrentStep}) => {
  const [counter, setCounter] = useState(0)
  const [files, setFiles] = useState(null)
  const [text, setText] = useState('')

  const onChange = file => {
    setCounter(file.fileList.length)
    setFiles(file.fileList)
  }

  return (
    <div className='solution'>
      <div className='solution__title'>
        Ваше решение
      </div>
      <div className='solution__main'>
        <Input.TextArea placeholder='Свободная форма' value={text} onInput={e => setText(e.target.value)}/>
        <div className='solution__main-upload'>
          <Upload className='upload-list-inline' accept='.docx, application/pdf' customRequest={null} maxCount={5} onChange={onChange}>
            Прекрепить файл {counter}/5 <span className='limitation-file'>до 29 мб, в форматах: pdf, docx</span>
          </Upload>
        </div>
        <Button className='blue' disabled={!text.length} onClick={() => setCurrentStep(2)}>Сохранить решение</Button>
      </div>
    </div>
  )
}

const files = [{title: 'Скачки напряжения.pdf', size: '76 мб'}, {title: 'Скачки напряжения.pdf', size: '76 мб'}, {title: 'Скачки напряжения.pdf', size: '76 мб'}];
export const Solutions = ({partners = [], setCurrentStep}) => {
  const [isShow, setIsShow] = useState(false)
  const [text, setText] = useState('')
  const [currentPartner, setCurrentPartner] = useState(partners[0])
  return (
    <div className='solutions flex-start-between'>
      <div className='solutions__partners'>
        <div className='solutions__partners-title'>Решения</div>
        <div className='solutions__partners-lists'>
          <ul>
            {partners.map(p =>
              <li className={cn({'select': p.name === currentPartner.name})} onClick={() => setCurrentPartner(p)}>
                {p.name}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='solutions__main'>
        <div className='solutions__main-partner-profile'><NavLink to={`/profile/${currentPartner.link}`}>{currentPartner.name}</NavLink></div>
        <div className='solutions__main-partner-decision'>
          {isShow ? <p>{currentPartner.decision}</p> : <div className='default'>Смотреть решение кейса</div>}
        </div>

        <div className='solutions__main-files'>
          <CaseInfo title='Загруженные файлы' text={text} files={files}/>
        </div>

        <TextArea text={text} setText={setText}/>

        <div className='solutions__main-feedback'>
          <div className='solutions__main-feedback__title'>
            Ваша оценка
          </div>
          <div className='flex-start-between'>
            <div className='solutions__main-feedback__appraise'>
              <div className='solutions__main-feedback__appraise-stars'>
                <Stars stars={6}/> <span>6/7</span>
              </div>
              <Button className='blue' onClick={() => setCurrentStep(3)}>Отправить</Button>
            </div>
            <div className='solutions__main-feedback__info flex-start-between'>
              <div className='solutions__main-feedback__info-opinion'>6</div>
              <p className='solutions__main-feedback__info-text'>
                Кейс решен верно, вычисления
                и выводы правильны и разумны. Визуализация слайдов краткая
                и профессиональная, история ясна
                и логична.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Feedback = ({partners = [], setCurrentStep}) => {
  const [isShow, setIsShow] = useState(false)
  const [currentPartner, setCurrentPartner] = useState(partners[0])
  return (
    <div className='feedback'>
      <div className='flex-start-between'>

        <div className='feedback__partners'>
          <div className='feedback__partners-title'>Решения</div>
          <div className='feedback__partners-lists'>
            <ul>
              {partners.map(p =>
                <li className={cn({'select': p.name === currentPartner.name})} onClick={() => setCurrentPartner(p)}>
                  {p.name}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='feedback__main'>
          <div className='feedback__main-partner-profile'><NavLink to={`/profile/${currentPartner.link}`}>{currentPartner.name}</NavLink></div>
          <div className='feedback__main-partner-decision'>
            <p>
              Крупная компания, входящая в топ в своем сегменте российского рынка, строит центр обработки данных (ЦОД) для заказчика – государственной структуры. Заказчик для
              подрядчика очень важен – это системный, стратегический, ключевой клиент. Работа заказчика влияет на огромное количество компаний, физических лиц и государственных
              органов. Заказчик постоянно находится на контроле у вышестоящих органов. Проект ЦОД для заказчика тоже стратегически важен. В проект входят серверная, инфраструктура,
              система бесперебойного и резервного питания. Смета составляет сотни миллионов рублей.
            </p>
          </div>
          <div className='feedback__main-appraise'>
            <div className='feedback__main-appraise__title'>Оценка</div>
            <div className='feedback__main-appraise__stars'>
              <Stars stars={6}/> <span>6/7</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-center'>
        <div className='feedback__appraise'>
          <div className='feedback__appraise-title'>Отзыв был полезен?</div>
          <div className='feedback__appraise-btn'>
            <Button  onClick={() => setCurrentStep(4)}>Да<img className='like' src={like} alt='like'/></Button>
            <Button>Нет<img className='dislike' src={dislike} alt='dislike'/></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LastStep = ({setCurrentStep}) => {
  const [text, setText] = useState('')
  const [checked, setChecked] = useState('')

  return (
    <div className='last-step'>
      <div className='last-step__score'>
        <div className='last-step__score-title'>Общая оценка</div>
        <div className='last-step__score-btn'>
          <Button className={cn('case-red', {'checked': checked === 'red'})} onClick={() => setChecked('red')}>
            Плохо
          </Button>
          <Button className={cn('case-yellow', {'checked': checked === 'yellow'})} onClick={() => setChecked('yellow')}>
            Нейтрально
          </Button>
          <Button className={cn('case-green', {'checked': checked === 'green'})} onClick={() => setChecked('green')}>
            Хорошо
          </Button>
        </div>
      </div>
      <TextArea text={text} setText={setText}/>
      <Button className='blue'  onClick={() => setCurrentStep(5)}>Отправить</Button>
    </div>
  )
}


export const CaseClose = () => {
  return (
    <div className='case-close'>
      <div className='case-close__title'>Кейс завершен</div>
      <div className='case-close__main'>
        <div className='case-close__main-title'>Видео разбор кейса с консультантом МакКинзи</div>
        <div className='case-close__main-video'>
            <img src={videoPreview} alt='preview'/>
        </div>
      </div>
    </div>
  )
}
