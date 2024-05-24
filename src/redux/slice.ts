import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Video {
    id: string;
    title: string;
    part: number;
    duration: string;
    watchedDuration: string;
    category: string;
    thumbnail: string;
}

interface State {
    chat: boolean;
    userProfile: boolean;
    notification: boolean;
    activeMenu: boolean;
    collapsed: boolean;
    videos: Video[];
    selectedDate: string | null
    level: 'low' | 'medium' | 'high' | ''
}

const initialState: State = {
    chat: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    collapsed: false,
    videos: [],
    selectedDate: null,
    level: '',
};

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveMenu(state, action: PayloadAction<boolean>) {
            state.activeMenu = action.payload;
        },
        setCollapsed(state) {
            state.collapsed = !state.collapsed;
        },
        setRecentlyWatched(state, action: PayloadAction<Video[]>) {
            state.videos = action.payload;
        },
        setDate(state, action: PayloadAction<string>) {
            state.selectedDate = action.payload
        },
        setPriority: (state, action: PayloadAction<'low' | 'medium' | 'high'>) => {
            state.level = action.payload
        }
        // setModalOpen(state, action: PayloadAction<boolean>) {
        //     state.modalOpen = !state.modalOpen
        // }
    },
});

export const { setActiveMenu, setCollapsed, setRecentlyWatched, setDate, setPriority } = appReducer.actions;
export default appReducer.reducer;
