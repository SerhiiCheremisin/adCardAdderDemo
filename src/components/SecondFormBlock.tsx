import React from 'react';
import {Input , FormGroup, Label} from 'reactstrap'
import { useDispatch } from 'react-redux';
import { getPhone, getEmail } from '../redux/reducers/fromData';

export default function SecondFormBlock():JSX.Element {
    const dispatch = useDispatch();
  return(
      <FormGroup>
          <Label for='phone'>Enter your phone number</Label>  
          <Input onChange={(e) => dispatch(getPhone(e.target.value))} id='phone' type='text' required={true}></Input>
          <Label for='email'>Enter your email address</Label>  
          <Input onChange={(e) => dispatch(getEmail(e.target.value))} id='email' type='email'></Input>
      </FormGroup>
  );
}
