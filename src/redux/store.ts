import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from './slice'
import authSlice from "./authSlice";
import { useDispatch } from "react-redux";


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authSlice,
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch