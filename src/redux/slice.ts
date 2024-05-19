import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface State {
    chat: boolean
    userProfile: boolean
    notification: boolean
    activeMenu: boolean
}

const initialState: State = {
    chat: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
}

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveMenu(state, action: PayloadAction<boolean>) {
            state.activeMenu = action.payload
        }
    }
})

export const { setActiveMenu } = appReducer.actions
export default appReducer.reducer