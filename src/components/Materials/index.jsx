import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Select, Card, Button} from 'antd';
import {preview1, preview2, popupPreview1, arrowDown, arrowUp, cardPreview1, cardPreview2, cardPreview3, cardPreview4, close} from '../../common/images/materials';
import {Download} from '../../utils/icon/download';
import './index.scss';

const faq = [
  {
    title: 'Для чего искать партнера по решению кейсов?',
    text: 'С помощью функции поиска парнеров. У вас есть возможность сохранить интересующие вас профили. При сохранении ваш профиль также появится у партнера на странице. В каждой анкете есть контактные данные, по которым можно связаться с человеком. Далее вы можете встретиться и решать кейсы, предварительно скачав материалы из библиотеки. В библиотеке собраны новые кейсы, которые не использовались ранее и отлично подходят для подготовки к интервью в McKinsey.'
  },
  {
    title: 'Как найти партнера по решению кейсов в Case Academy?',
    text: 'С помощью функции поиска парнеров. У вас есть возможность сохранить интересующие вас профили. При сохранении ваш профиль также появится у партнера на странице. В каждой анкете есть контактные данные, по которым можно связаться с человеком. Далее вы можете встретиться и решать кейсы, предварительно скачав материалы из библиотеки. В библиотеке собраны новые кейсы, которые не использовались ранее и отлично подходят для подготовки к интервью в McKinsey.'
  },
  {
    title: 'Зачем участвовать в Case Challenge?',
    text: 'С помощью функции поиска парнеров. У вас есть возможность сохранить интересующие вас профили. При сохранении ваш профиль также появится у партнера на странице. В каждой анкете есть контактные данные, по которым можно связаться с человеком. Далее вы можете встретиться и решать кейсы, предварительно скачав материалы из библиотеки. В библиотеке собраны новые кейсы, которые не использовались ранее и отлично подходят для подготовки к интервью в McKinsey.'
  }
]

const cardLibrary = [
  {
    img: cardPreview1,
    imgTitle: 'Natural Resourses',
    category: 'Operational improvements',
    title: 'Elite Furniture',
    text: 'Ваш клиент – компания «ЭлитМебель». «ЭлитМебель» производит и продает под заказ мебель для дома в верхнем ценовом сегменте в нескольких странах СНГ. CEO компании пригласил команду консультантов для увеличения продаж.'
  },
  {
    img: cardPreview2,
    imgTitle: 'Consumer Goods',
    category: 'Operational improvements',
    title: 'Foody',
    text: 'Ваш клиент – Foody, сеть продуктовых мини-маркетов формата «рядом с домом» в России. Вам необходимо проанализировать и предложить варианты улучшения операционных процессов в магазине (внутри пространства магазина).'
  },
  {
    img: cardPreview3,
    imgTitle: 'Financial Services',
    category: 'Sales',
    title: 'FastCom',
    text: 'Ваш клиент – компания «ЭлитМебель». «ЭлитМебель» производит и продает под заказ мебель для дома в верхнем ценовом сегменте в нескольких странах СНГ. CEO компании пригласил команду консультантов для увеличения продаж.'
  },
  {
    img: cardPreview4,
    imgTitle: 'Financial Services',
    category: 'Marketing',
    title: 'SuperEngineering',
    text: 'Ваш клиент – компания «СуперИнжиниринг» с офисом в одной из стран СНГ. «СуперИнжиниринг» проектирует объекты для нефтегазовой отрасли (нефтяные платформы, нефтеперерабатывающие заводы (Read full)'
  }
]

const Buddies = () => {
  const [selectIndustry, setSelectIndustry] = useState(null)
  const [selectFunction, setSelectFunction] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [videoPopup, setVideoPopup] = useState(null)
  const openPopup = (video) => {
    setShowPopup(true)
    setVideoPopup(video)
  }

  return (
    <section className='materials'>
      <section className='materials__info'>
        <div className='materials__info-title title'>
          <h1 className='title-top'>Materials</h1>
          <h2 className='title-main'>
            С помощью функции поиска парнеров. У вас есть возможность сохранить интересующие вас профили.
          </h2>
        </div>
        <div className='materials__info-text'>
          <p>
            С помощью функции поиска парнеров. У вас есть возможность сохранить интересующие вас профили. При сохранении ваш профиль также появится у партнера на странице. В
            каждой анкете есть контактные данные, по которым можно связаться с человеком. Далее вы можете встретиться и решать кейсы, предварительно скачав материалы из библиотеки.
            В библиотеке собраны новые кейсы, которые не использовались ранее и отлично подходят для подготовки к интервью в McKinsey.
          </p>
        </div>
        <div className='materials__info-links'>
          <NavLink to='/case-library'>Case library</NavLink>
          <NavLink to='/faq'>Faq</NavLink>
        </div>
      </section>

      <section className='materials__videos'>
        <div className='materials__videos-card'>
          <div className='materials__videos-card__video' onClick={() => openPopup('video')}>
            <img src={preview1} alt='preview video'/>
          </div>
          <div className='materials__videos-card__info card__video--left title'>
            <h3 className='title-top'>Video tutorial</h3>
            <h4 className='title-main'>
              how to solve case
              with partners?
            </h4>
          </div>
        </div>
        <div className='materials__videos-card'>
          <div className='materials__videos-card__info card__video--right title'>
            <h3 className='title-top'>Video tutorial</h3>
            <h4 className='title-main'>
              I’m new, how
              to start?
            </h4>
          </div>
          <div className='materials__videos-card__video' onClick={() => openPopup('video')}>
            <img src={preview2} alt='preview video'/>
          </div>
        </div>

        {showPopup && <Popup video={videoPopup} setShowPopup={setShowPopup}/>}
      </section>

      <section className='materials__library'>
        <h2 className='materials__library-title'>Case library</h2>
        <div className='materials__library-filter'>
          <p className='materials__library-filter__text'>
            Здесь вы можете найти кейсы для решения
            с партнером в целях подготовки к интервью
          </p>
          <div className='materials__library-filter__select'>
            <div className='materials__library-filter__select-industry'>
              <Select className='ant-select-customize-input' placeholder='Select industry' onChange={setSelectIndustry}>
                <Select.Option value='industry1'>industry1</Select.Option>
                <Select.Option value='industry2'>industry2</Select.Option>
              </Select>
            </div>
            <div className='materials__library-filter__select-function'>
              <Select className='ant-select-customize-input' placeholder='Select function' onChange={setSelectFunction}>
                <Select.Option value='function1'>function1</Select.Option>
                <Select.Option value='function2'>function2</Select.Option>
              </Select>
            </div>
          </div>
        </div>
        <div className='materials__library-cards'>
          {cardLibrary.map(({img, imgTitle, category, title, text}) => <CardLibrary key={title + category} img={img} imgTitle={imgTitle} category={category} title={title}
                                                                                    text={text}/>)}
          <div className='materials__library-cards__btn'>
            <Button>Show more</Button>
          </div>
        </div>
      </section>

      <section className='materials__faq'>
        <div className='materials__faq-title'>Часто задаваемые вопросы</div>
        {faq.map(({text, title}) => <Faq key={title} text={text} title={title}/>)}
      </section>

    </section>
  );
};

export default Buddies;

const Popup = ({video, setShowPopup}) => {
  return (
    <div className='popup'>
      <div className='popup__close' onClick={() => setShowPopup(false)}>
        <img src={close} alt='close'/>
      </div>
      <div className='popup__video'>
        <img src={popupPreview1} alt='preview'/>
      </div>
    </div>
  )
}

const Faq = ({title, text}) => {
  const [isHide, setIsHide] = useState(true)

  return (
    <div className='faq'>
      <div className='faq-top'>
        <h3 className='faq-top__title'>{title}</h3>
        <div className='faq-top__arrow'>
          <img className={isHide ? 'arrow-down' : 'arrow-up'} src={isHide ? arrowDown : arrowUp} alt='arrow' onClick={() => setIsHide(!isHide)}/>
        </div>
      </div>
      {!isHide &&
      <div className='faq-text'>
        <p>{text}</p>
      </div>
      }
    </div>
  )
}


const CardLibrary = ({img, imgTitle, category, title, text}) =>
  <Card
    className='card-library'
    cover={
      <div className='card-library__img'>
        <h5 className='card-library__img-title'>{imgTitle}</h5>
        <img src={img} alt='case library'/>
      </div>
    }
    actions={[<Download/>]}
  >
    <div className='card-library__info'>
      <h4 className='card-library__info-category'>{category}</h4>
      <h3 className='card-library__info-title'>{title}</h3>
      <p className='card-library__info-text'>{text}</p>
    </div>
  </Card>
