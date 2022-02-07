import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Input , FormGroup, Label} from 'reactstrap'
import {getTitle, getDescription, getChecked} from '../redux/reducers/fromData';


export default function FirstFormBlock():JSX.Element {
const isCheecked = useSelector((state:any) => state.formData.mainInfo.status)
const dispatch = useDispatch();   

  return (
      <FormGroup>
          <Label for="titletext">
             AD Title
           </Label>
          <Input onChange={(e) => dispatch(getTitle(e.target.value))} id='titletext' type='text' required={true}/>
          <Label for="exampleText">
             AD Description
           </Label>
           <Input
            id="exampleText"
            name="text"
            type="textarea"
            onChange={(e) => dispatch(getDescription(e.target.value))}
          />
           <Input onChange={() => dispatch(getChecked(!isCheecked))} type="checkbox" checked={isCheecked} />
            {' '}
            <Label check>
              Status
            </Label>
      </FormGroup>
  );
}
