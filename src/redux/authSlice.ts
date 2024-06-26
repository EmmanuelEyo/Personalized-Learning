import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { account } from "@/appwriteConfig";
import { ID } from "appwrite";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

interface UserProfile {
    interests?: string[];
    skillLevel?: string;
    learningGoals?: string[]
    learningMethods?: string[];
    timeCommitment?: number;
    additionalInfo?: string;
}

interface AuthState {
    userProfile: UserProfile | null;
    user: { name: string, isFirstTime: boolean } | null
    loading: boolean
    skills: string[]
}

const initialState: AuthState = {
    userProfile: null,
    user: null,
    loading: true,
    skills: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserProfile(state, action: PayloadAction<UserProfile>) {
            state.userProfile = action.payload;
        },
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
            state.loading = false
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        setSkills(state, action: PayloadAction<string[]>) {
            state.skills = action.payload
        },
    }
})

export const { setUser, setLoading, setUserProfile, setSkills } = authSlice.actions

export const fetchSkills = (query: string = ''): AppThunk => async (dispatch) => {
    const skillsAndInterests = [
        'Web Development', 'Data Science', 'Machine Learning', 'Mobile Development', 
        'Cybersecurity', 'Cloud Computing', 'DevOps', 'Blockchain', 'UI/UX Design', 
        'Game Development', 'Digital Marketing', 'SEO', 'Content Writing', 'Graphic Design',
        'Photography', 'Video Editing', 'Animation', 'Artificial Intelligence', 
        'Deep Learning', 'NLP'
    ]
    await new Promise(resolve => setTimeout(resolve, 500))
    const filteredSkills = skillsAndInterests.filter(skill => skill.toLowerCase().includes(query.toLowerCase()))
    dispatch(setSkills(filteredSkills))
}

const updateUserPreferences = async (prefs: any) => {
    await account.updatePrefs(prefs)
}

export const handleUserLogin = (credentials: { email: string; password: string }, router: any): AppThunk => async (dispatch) => {
    try {
        const response = await account.createEmailPasswordSession(
            credentials.email,
            credentials.password,
        );
        console.log('LOGGED IN:', response)
        const accountDetails = await account.get();
        const isFirstTime = accountDetails.prefs?.isFirstTime ?? true
        if(isFirstTime) {
            await updateUserPreferences({ isFirstTime: false })
        }
        console.log('AccountDetails:', accountDetails)
        dispatch(setUser({ ...accountDetails, isFirstTime }))
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
        await updateUserPreferences({ isFirstTime: true })
        console.log('AccountDetails:', accountDetails)
        dispatch(setUser({ ...accountDetails, isFirstTime: true}))
        router.push('/survey')
    }catch(err) {
        console.error(err)
    }
};

export default authSlice.reducer


