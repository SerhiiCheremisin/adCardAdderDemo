import React from 'react';
import {Input , FormGroup, Label} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addPhotoInfo } from '../redux/reducers/fromData';

export default function PhotoBlock() {

const dispatch = useDispatch();

  return (
      <FormGroup>
        <Label for="exampleFile">
             Upload file
           </Label>
           <Input
             id="exampleFile"
             name="file"
             type="file"
             onChange={(e) => dispatch(addPhotoInfo(e.target.value))}
           />
            <Label for="exampleFile">
             Upload file
           </Label>
           <Input
             id="exampleFile"
             name="file"
             type="file"
             onChange={(e) => dispatch(addPhotoInfo(e.target.value))}
           />
            <Label for="exampleFile">
             Upload file
           </Label>
           <Input
             id="exampleFile"
             name="file"
             type="file"
             onChange={(e) => dispatch(addPhotoInfo(e.target.value))}
           />
            <Label for="exampleFile">
             Upload file
           </Label>
           <Input
             id="exampleFile"
             name="file"
             type="file"
             onChange={(e) => dispatch(addPhotoInfo(e.target.value))}
           />
            <Label for="exampleFile">
             Upload file
           </Label>
           <Input
             id="exampleFile"
             name="file"
             type="file"
             onChange={(e) => dispatch(addPhotoInfo(e.target.value))}
           />
      </FormGroup>
  );
}
