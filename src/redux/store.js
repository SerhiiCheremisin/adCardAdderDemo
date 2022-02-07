import { configureStore } from '@reduxjs/toolkit';
import steps from '../redux/reducers/steps';
import formData from '../redux/reducers/fromData';

export default configureStore({
 reducer : {
    steps,
    formData,
 }
})

