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

interface Milestone {
    id: string;
    name: string;
    dueDate: string;
}

interface State {
    chat: boolean;
    userProfile: boolean;
    notification: boolean;
    activeMenu: boolean;
    collapsed: boolean;
    videos: Video[];
    selectedDate: string | null
    level: 'low' | 'medium' | 'high' | '',
    milestones: Milestone[];
    urls: string[];
    files: File[];
    notifications: {
        email: boolean,
        sms: boolean,
        push: boolean,
        dashboard: boolean
    };
    reminder: string
}

type NotoficationType = 'email' | 'sms' | 'push' | 'dashboard'

const initialState: State = {
    chat: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    collapsed: true,
    videos: [],
    selectedDate: null,
    level: '',
    milestones: [],
    urls: [],
    files: [],
    notifications: {
        email: false,
        sms: false,
        push: false,
        dashboard: false
    },
    reminder: 'none',
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
        },
        addMilestone: (state) => {
            state.milestones.push({ id: new Date().toISOString(), name: '', dueDate: '' });
        },
        updateMilestone: (state, action: PayloadAction<{ id: string; name: string; dueDate: string }>) => {
            const index = state.milestones.findIndex(milestone => milestone.id === action.payload.id);
            if (index !== -1) {
              state.milestones[index] = action.payload;
            }
        },
        removeMilestone: (state, action: PayloadAction<{ id: string }>) => {
            state.milestones = state.milestones.filter(milestone => milestone.id !== action.payload.id);
        },
        addUrl(state, action: PayloadAction<string>) {
            state.urls.push(action.payload)
        },
        uploadFile(state, action: PayloadAction<File>) {
            state.files.push(action.payload)
        },
        setReminder(state, action: PayloadAction<string>) {
            state.reminder = action.payload
        },
        setNotifications(state, action: PayloadAction< {type: NotoficationType, value: boolean} >) {
            state.notifications[action.payload.type] = action.payload.value
        }
        // setModalOpen(state, action: PayloadAction<boolean>) {
        //     state.modalOpen = !state.modalOpen
        // }
    },
});

export const { setActiveMenu, setCollapsed, setRecentlyWatched, setDate, setPriority, addMilestone, updateMilestone, removeMilestone, addUrl, uploadFile, setReminder, setNotifications  } = appReducer.actions;
export default appReducer.reducer;
