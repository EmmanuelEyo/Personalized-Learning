import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { account } from "@/appwriteConfig";
import { ID } from "appwrite";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

interface AuthState {
    user: any | null
    loading: boolean
}

const initialState: AuthState = {
    user: null,
    loading: true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
            state.loading = false
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
    }
})

export const { setUser, setLoading } = authSlice.actions

export const handleUserLogin = (credentials: { email: string; password: string }, router: any): AppThunk => async (dispatch) => {
    try {
        const response = await account.createEmailPasswordSession(
            credentials.email,
            credentials.password,
        );
        console.log('LOGGED IN:', response)
        const accountDetails = await account.get();
        console.log('AccountDetails:', accountDetails)
        dispatch(setUser(accountDetails))
        router.push('/personalized-dashboard')
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(setLoading(false))
    }
};

export const getUserOnLoad = (): AppThunk => async (dispatch) => {
    try {
        const accountDetails = await account.get();
        dispatch(setUser(accountDetails))
    } catch (err) {
        console.warn(err);
    } finally {
        dispatch(setLoading(false))
    }
};


export const handleUserLogout = (): AppThunk => async (dispatch) => {
    try {
        await account.deleteSession('current')
        console.log('clicked')
        dispatch(setUser(null))
    } catch {
        console.log('Error logging out')
    }
};

export const handleUserRegister = (credentials: { email: string; password1: string, password2: string, name: string }, router: any): AppThunk => async (dispatch) => {
    if (credentials.password1 !== credentials.password2) {
        alert('Password do not match, please cross-check and try again.')
        return null
    }

    try{
        const response = await account.create(
            ID.unique(),
            credentials.email,
            credentials.password1,
            credentials.name,
        );
        await account.createEmailPasswordSession(credentials.email, credentials.password1)
        const accountDetails = await account.get();
        console.log('AccountDetails:', accountDetails)
        dispatch(setUser(accountDetails))
        router.push('/personalized-dashboard')
    }catch(err) {
        console.error(err)
    }
};

export default authSlice.reducer


