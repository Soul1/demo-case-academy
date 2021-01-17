import React, {useState} from 'react';
import {Button, Card, Select} from 'antd';
import {cardPreview1, cardPreview2, cardPreview3, cardPreview4} from '../../common/images/materials';
import pastCase from '../../common/images/case-challenge/pastCase.svg';
import {Download} from '../../utils/icon/download';
import './index.scss';

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


const CaseChallenge = () => {
  const [selectIndustry, setSelectIndustry] = useState(null)
  const [selectFunction, setSelectFunction] = useState(null)
  return (
    <div className='case-challenge'>
      <div className='case-challenge__top'>
        <img src={pastCase} alt='pastCase'/>
        <div className='case-challenge__top-headers'>
          <h1 className='case-challenge__top-headers__title'>Past Case Challenges</h1>
          <h2 className='case-challenge__top-headers__subtitle'>Finding a partner to solve cases</h2>
        </div>
      </div>
      <div className='case-challenge__main'>
        <div className='case-challenge__main-select'>
          <div className='case-challenge__main-select-industry'>
            <Select className='ant-select-customize-input' placeholder='Select industry' onChange={setSelectIndustry}>
              <Select.Option value='industry1'>industry1</Select.Option>
              <Select.Option value='industry2'>industry2</Select.Option>
            </Select>
          </div>
          <div className='case-challenge__main-select-function'>
            <Select className='ant-select-customize-input' placeholder='Select function' onChange={setSelectFunction}>
              <Select.Option value='function1'>function1</Select.Option>
              <Select.Option value='function2'>function2</Select.Option>
            </Select>
          </div>
        </div>
        <div className='materials__library-cards'>
          {cardLibrary.map(({img, imgTitle, category, title, text}) => <CardLibrary key={title + category} img={img} imgTitle={imgTitle} category={category} title={title}
                                                                                    text={text}/>)}
          <div className='materials__library-cards__btn'>
            <Button>Show more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseChallenge;

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
