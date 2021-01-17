import React, {useState} from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {setCurrentPage} from '../../../redux/reducers/page';
import Layout from '../../../utils/layout/service';
import {FirstStep} from './first-step';
import {SecondStep} from './second-step';

const Register = ({page, setCurrentPage}) => {
  const [step, setStep] = useState(1)
  const [finishFirstStep, setFinishFirstStep] = useState(null)
  const [finishSecondStep, setFinishSecondStep] = useState(null)

  return (
    <Layout>
      <div className='register'>
        {step === 1
          ? <>
            <h1 className='title'>{page}</h1>
            <div className='steps'>
              <div className={cn('step', {'current-step': step === 2})}/>
            </div>
            <FirstStep setCurrentPage={setCurrentPage} setStep={setStep} setFinish={setFinishFirstStep}/>
          </>
          : <SecondStep step={step} setFinish={setFinishSecondStep}
                        initials={finishFirstStep.firstName[0] + finishFirstStep.lastName[0]}
                        name={finishFirstStep.firstName + ' ' + finishFirstStep.lastName}/>
        }
      </div>
    </Layout>
  )
};

export default connect(({page}) => ({...page}), {setCurrentPage})(Register);
