import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { account } from "@/appwriteConfig";
import { useRouter } from "next/navigation";

interface AuthState {
    user: any | null
}

const initialState: AuthState = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
        },
    }
})

export const { setUser } = authSlice.actions


export const handleUserLogin = (credentials: { email: string; password: string }, router: any): AppThunk => async (dispatch) => {
    try {
        const response = await account.createEmailPasswordSession(
            credentials.email,
            credentials.password,
        );
        console.log('LOGGED IN:', response)
        const accountDetails = await account.get();
        dispatch(setUser(accountDetails))
        router.push('/personalized-dashboard')
    } catch (err) {
        console.log(err);
    }
};
export default authSlice.reducer


