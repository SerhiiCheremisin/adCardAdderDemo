import React , {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form , Progress, ButtonGroup , Button} from 'reactstrap';
import './App.css';

//redux
import {increaseStep, decreaseStep, resetSteps} from './redux/reducers/steps';


//components
import FirstFormBlock from './components/FirstFormBlock';
import SecondFormBlock from './components/SecondFormBlock';
import PhotoBlock from './components/PhotoBlock';
import PaidServices from './components/PaidServices';


function App():JSX.Element {

const dispatch = useDispatch();
const step = useSelector( (state:any) => state.steps.step);
const data = useSelector( (state:any) => state.formData);
const cardTitle = useSelector( (state:any) => state.formData.mainInfo.title);
const userPhone = useSelector( (state:any) => state.formData.userInfo.phone);
const [percent, setPercent] = useState<number>(0);

useEffect(() => {
  if (step === 0) {
    setPercent(0)
  }
  if (step === 1) {
    setPercent(30)
  }
  if (step === 2) {
    setPercent(60)
  }
  if (step === 3) {
    setPercent(90)
  }
})

// i have decided not to hide this buttons, and disable them instead
let prevRenderLogic = step === 0 ? true : false
let nextRenderLogic = step === 3 ? true : false
let saveRenderLogic = step !== 3 ? true : false


const formSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
// we can do with our data whatever we want (variable  'data')
  console.log(data)
  dispatch(resetSteps(0))
  alert('Form submitted succesfully')
}

const nextButtonHandler = () => {
  if (step === 0 && cardTitle === '') {
    alert('You should field "Title" field')
    return
  }
  if (step === 1 && userPhone === '') {
    alert('You should field "Phone" field')
    return
  }
  dispatch(increaseStep())
}

  return (
    <div className="App">
      <Form onSubmit={(e) => formSubmitHandler(e)} >
      {step === 0 && <FirstFormBlock/> }
      {step === 1 && <SecondFormBlock/>}
      {step === 2 && <PhotoBlock/>}
      {step === 3 && <PaidServices/>}
      <Progress value={percent}  color="success"/> 
      <ButtonGroup>
        <Button onClick={() => dispatch(decreaseStep())} disabled={prevRenderLogic}>
          Prev
        </Button>
        <Button onClick={nextButtonHandler} disabled={nextRenderLogic}>
          Next
        </Button>
        <Button disabled = {saveRenderLogic} color = 'success'>
          Save
        </Button>
      </ButtonGroup>
      </Form>  
    </div>
  );
}

export default App;
