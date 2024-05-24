import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from './slice';
import authSlice from './authSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
