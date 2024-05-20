import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface State {
    chat: boolean
    userProfile: boolean
    notification: boolean
    activeMenu: boolean
    collapsed: boolean
}

const initialState: State = {
    chat: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    collapsed: false,
}

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveMenu(state, action: PayloadAction<boolean>) {
            state.activeMenu = action.payload
        },
        setCollapsed(state) {
            state.collapsed = !state.collapsed
        }
    }
})

export const { setActiveMenu, setCollapsed } = appReducer.actions
export default appReducer.reducer