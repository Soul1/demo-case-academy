import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import {Button, Input, Switch, Checkbox} from 'antd';
import {down, up, add, arrow, avatar, report} from '../../common/images/partners';
import {PartnersIcon} from '../../utils/icon/partners';
import {SelectItem} from '../../utils/supports';
import './index.scss';

const selects = [
  {
    placeholder: 'Tags',
    options: ['Networking', 'Preparing for an interview', 'Participate in case championships', 'Way consumers', 'Case championships']
  },
  {
    placeholder: 'University'
  },
  {
    placeholder: 'Graduation year',
    options: ['2000', '1999', '1998', '1997', '1996', '1995']
  },
  {
    placeholder: 'Language',
    options: ['English', 'Russian', 'Spanish', 'Hebrew', 'Armenian', 'Italian']
  },
  {
    placeholder: 'Country',
    options: ['USA', 'Russia', 'Spain', 'Israel', 'Armenia', 'Italy']
  },
  {
    placeholder: 'Case Challenge Participant'
  }
]

const partner = {
  name: 'Marie-Thérèse Cassidy',
  avatar: avatar,
  lastActive: 'Несколько дней назад',
  cells: [
    {title: 'Предпочтительный вид связи', text: ['Email', 'Phone']},
    {title: 'University', text: 'Санкт-Петербургский государственный университет'},
    {title: 'Год окончаниия', text: '2008 год'},
    {
      title: 'About',
      text: 'Angie Yuanmalai, Associate Creative Director at Huge uncovers how user experience can change the way consumers and brands interact with each other. Huge is an experience design and digital marketing agency that provides services to Fortune 100 companies. They apply rapid prototyping, ongoing usability testing and iterative development to bridge the gap between the digital and physical experiences. Angie Yuanmalai will be talking about building and living a creative culture.'
    },
    {title: 'Language', text: ['English', 'Russian', 'Spanish']},
    {title: 'Tags', text: ['Preparing for an interview', 'I am looking for a team to participate']},
    {title: 'Case Challenge Participant', text: 'Участвует'}
  ]
}

const Buddies = () => {
  const [filters, setFilters] = useState([])

  const onChangeFilter = (filter) => {
    setFilters(filters.length > 0
      ? filters.map(({placeholder}) => placeholder === filter.placeholder ? {placeholder: filter.placeholder, f: filter.f} : filter)
      : [filter])
  }
  console.log(filters)
  const dropSelectFilter = (p, dropF) => {
    setFilters(filters.map(({placeholder, f}) => placeholder === p && f.filter(filter => filter !== dropF)))
  }

  const clearFilter = () => {
    setFilters([])
  }

  return (
    <section className='partners'>
      <div className='partners__top'>
        <div className='partners__top-icon'>
          <PartnersIcon/>
        </div>
        <div className='partners__top-headers'>
          <h1 className='partners__top-headers__title'>Partners</h1>
          <h2 className='partners__top-headers__subtitle'>Finding a partner to solve cases</h2>
        </div>
      </div>

      <div className='partners__main'>
        <div className='partners__main-wrapper'>
          <div className='partners__main-wrapper__filter'>
            <div className='partners__main-wrapper__top'>
              <div className='partners__main-wrapper__top-title'>
                Filter
              </div>
              {!!filters.length &&
              <div className='partners__main-wrapper__top-clear' onClick={clearFilter}>
                Clear all
              </div>
              }
            </div>
            {selects.map(({placeholder, options}) => <Filter key={placeholder} placeholder={placeholder}
                                                             checkList={filters.map(f => f.placeholder === placeholder && f.f)[0]}
                                                             options={options} onChange={onChangeFilter}/>)}
          </div>

          <div className='partners__main-wrapper__left'>
            <div className={cn('partners__main-wrapper__left-filters', {'mb30': filters.length})}>
              {filters.length > 0 && filters.map(({placeholder, f}) =>
                f.map(filter => <SelectItem key={filter} filter={filter} placeholder={placeholder} />)
              )}
            </div>
            <div className='partners__main-wrapper__left-card'>
              <Card canUserSearchPartner={true} partner={partner}/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Buddies;

const Filter = ({placeholder, options = [], onChange, checkList}) => {
  const [show, setShow] = useState(false);

  const onTest = (f) => {
    onChange({placeholder, f})
  }
  const onSearch = () => console.log('search');
  const ccp = 'Case Challenge Participant';
  return (
    <div className='filter'>
      <div className='filter__placeholder' onClick={() => setShow(!show)}>
        {placeholder}
        {!(placeholder === ccp) &&
        <div className='filter__arrow'>
          <img className={show ? 'arrow-down' : 'arrow-up'} src={show ? up : down} alt='arrow'/>
        </div>}
        {placeholder === ccp && <Switch/>}
      </div>
      {show && !(placeholder === ccp) &&
      <div className='filter__show'>
        {!!options.length && <Checkbox.Group options={options} value={checkList} onChange={onTest}/>}
        {placeholder === 'University' && <Input.Search placeholder='Название университета' size='large' allowClear onSearch={onSearch}/>}
      </div>
      }
    </div>
  )
};

const Card = ({partner, canUserSearchPartner}) => {
  const [isShowSearch, setIsShowSearch] = useState(false)

  return (
    <div className='card'>
      {
        !canUserSearchPartner
          ? <CardCanSearchPartner/>
          : !isShowSearch
          ? <CardSearchPartner setIsShowSearch={setIsShowSearch}/>
          : partner
            ? <CardPartner {...partner}/>
            : <CardNotFoundPartner/>
      }
    </div>
  )
};

const CardSearchPartner = ({setIsShowSearch}) =>
  <div className='card-search-partner'>
    <p>Ищите партнеров для совместного решения кейсов по всему миру или в вашем городе. Настройте фильтры и начинайте.</p>
    <Button className='blue' shape='round' size='large' onClick={() => setIsShowSearch(true)}>Начать поиск</Button>
  </div>

const CardPartner = ({name, avatar, lastActive, cells}) => {
  return (
    <div className='card-partner'>
      <div className='card-partner__avatar'>
        <img src={avatar} alt='avatar'/>
        <div className='report'>
          Report
          <img src={report} alt='report'/>
        </div>
      </div>
      <div className='card-partner__info'>
        <div className='card-partner__info-name'>
          {name}
          <div className='last-active'>
            Last active:<span>{lastActive}</span>
          </div>
        </div>
        <div className='card-partner__info-cells'>
          {cells && cells.map(({title, text}) => <CardPartnerCell title={title} text={text}/>)}
        </div>
        <div className='card-partner__info-btn'>
          <Button className='blue'>
            Add contact
            <img src={add} alt='add'/>
          </Button>
          <Button>
            Next
            <img src={arrow} alt='arrow'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

const CardPartnerCell = ({title, text}) => {
  return (
    <div className='card-partner-cell'>
      <h5 className='card-partner-cell__title'>
        {title}
      </h5>
      <p className='card-partner-cell__text'>
        {title !== 'Tags' && (Array.isArray(text)
          ? text.join(', ')
          : <span className={title === 'Case Challenge Participant' && 'participant'}>{text}</span>)}
        {title === 'Tags' && text.map(t => <div className='tags'>{t}</div>)}
      </p>
    </div>
  )
}

const CardCanSearchPartner = () =>
  <div className='card-can-search-partner'>
    <h3>Поиск недоступен</h3>
    <p>Чтобы начать поиск партнеров, нужно чтобы ваш профиль тоже был открыт для поиска другими участниками проекта. Открыть поиск можно в настройках профиля.</p>
    <Button className='blue' shape='round' size='large'>Перейти в профиль</Button>
  </div>

const CardNotFoundPartner = () =>
  <p className='card-not-found-partner'>
    Кажется, по вашему запросу нет подходящих партнеров. Попробуйте убрать некоторые фильтры.
  </p>
