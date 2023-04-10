import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BigGreenButton, Button, DangerButton } from './composition/composition';
import { withUser } from './hoc/withUser';
import { UserInfo } from './people/UserInfo';
import { UserInfoForm } from './hoc/userInfoForm';


const Step1 = ({  goToNext }) => (
   <>
     <BigGreenButton text="Dont do  it" />
     {/* <Button text='main button' color='green' size='small' /> */}
    <p>Step 1</p>
    <button onClick={goToNext}>Go to Next</button>
  </>
)

const Step2 = ({  goToNext }) => (
  <>
   <p>Step 2</p>
   <button onClick={goToNext}>Go to Next</button>
 </>
)

const Step3 = ({  goToNext }) => (
  <>
   <p>Step 3</p>
   <button onClick={goToNext}>Go to Next</button>
 </>
)

// const Step2 = ({ goToNext }) (
//    <>
//     <p>Step 2</p>
//     <button onClick={goToNext}>Go to Next</button>
//   </>
// )

// const Step3 = ({ goToNext }) => (
//    <>
//     <p>Step 3</p>
//     <button onClick={goToNext}>Go to Next</button>
//   </>
// )

const UserInfoWithLoader = withUser(UserInfo, '123')
function App() {
  
  return (
    <>
  
   {/* <UserInfoWithLoader /> */}
   <UserInfoForm />
    {/* <UncontrolledOnboardingFlow>
      <Step1 />
      <Step2 />
      <Step3 />
    </UncontrolledOnboardingFlow> */}
   
    {/* <button onClick={() => setShouldShow(true)}>
      Show Modal
    </button>
    <ControlledModal shouldShow={showModal} onRequestClose={() => setShouldShow(false)}>
      <p>Hell Modal</p>
    </ControlledModal> */}

    </>
  );
}

export default App;
