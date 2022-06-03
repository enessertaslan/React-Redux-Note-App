import {configureStore} from '@reduxjs/toolkit'; // configureStore u import ediyoruz
import notesSlice from './notesSlice';

export const store=configureStore({
    reducer:{
        notes:notesSlice,

    },
    
}) 