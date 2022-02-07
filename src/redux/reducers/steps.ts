import { createSlice } from '@reduxjs/toolkit';

const steps = createSlice({
    name: 'steps',
    initialState : {
        step : 0
    },
    reducers : {
       increaseStep (state) {
        state.step++
       },
       decreaseStep (state) {
        state.step--
       },
       resetSteps (state, action) {
           state.step = action.payload
       }
    }
})

export const {increaseStep, decreaseStep, resetSteps} = steps.actions;

export default steps.reducer;