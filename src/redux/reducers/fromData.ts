import { createSlice } from '@reduxjs/toolkit';

export interface cardState {
    mainInfo : adInformation,
    userInfo: userInformation,
    photos: string[] | [],
    adsInfo : paidServices
}

export interface adInformation {
    title: string,
    description: string,
    status: boolean
}

export interface userInformation {
    phone: string,
    email: string,
}

export interface paidServices {
    ads7days: boolean,
    ads14days: boolean,
    top7days: boolean,
    top14days: boolean,
    top30days: boolean,
}

const ininState : cardState = {
    mainInfo : {
        title: '',
        description: '',
        status: false
    },
    userInfo : {
        phone: '',
        email: '',
    },
    photos: [],
    adsInfo : {
        ads7days: false,
        ads14days: false,
        top7days: false,
        top14days: false,
        top30days: false,
    }
}

const formData = createSlice({
    name: 'formData',
    initialState : ininState,
    reducers: {
        getTitle (state, action) {
           state = { ...state, ...state.mainInfo.title = action.payload }
        },
        getDescription (state, action) {
            state = { ...state, ...state.mainInfo.description = action.payload }
        },
        getChecked (state, action) {
            state = {...state, ...state.mainInfo.status = action.payload}
        },
        getPhone (state, action) {
            state = {...state, ...state.userInfo.phone = action.payload}
        },
        getEmail (state, action) {
            state = {...state, ...state.userInfo.email = action.payload}
        },
        getAds7Days (state,action) {
            state = {...state, ...state.adsInfo.ads7days = action.payload}
        },
        getAds14Days (state,action) {
            state = {...state, ...state.adsInfo.ads14days = action.payload}
        },
        getTop7Days (state,action) {
            state = {...state, ...state.adsInfo.top7days = action.payload}
        },
        getTop14Days (state,action) {
            state = {...state, ...state.adsInfo.top14days = action.payload}
        },
        getTop30Days (state,action) {
            state = {...state, ...state.adsInfo.top30days = action.payload}
        },
        addPhotoInfo (state, action) {
            const newState = state.photos.slice();
            newState.push(action.payload);
            state = {...state, ...state.photos = newState}
        },
        resetPhotoInfo (state) {
            state = {...state, ...state.photos = []}
        }
    }
})

export const {getTitle, getDescription, getChecked, getPhone, getEmail, getAds7Days, getAds14Days, getTop7Days, getTop14Days, getTop30Days, addPhotoInfo, resetPhotoInfo } = formData.actions;

export default formData.reducer