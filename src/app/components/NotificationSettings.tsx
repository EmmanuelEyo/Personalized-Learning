import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/redux/store'
import { setNotifications, setReminder } from '@/redux/slice'

const NotificationSettings = () => {
    const dispatch = useAppDispatch()
    const notifications = useSelector((state: RootState) => state.app.notifications)
    const reminder = useSelector((state: RootState) => state.app.reminder)


    const handleCheckboxChange = (type: 'email' | 'sms' | 'push' | 'dashboard') => (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNotifications({ type, value: e.target.checked }));
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setReminder(e.target.value));
    };


  return (
    <div className="max-w-md mx-auto p-4 bg-transparent shadow-md rounded-lg">
        <h2 className="text-2xl font-medium text-gray-300 mb-4">Notification Settings</h2>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Reminders</label>
            <select
                value={reminder}
                onChange={handleDropdownChange}
                className="mt-1 block w-full px-3 py-3 bg-slate-700 rounded-xl shadow-sm focus:outline-none sm:text-sm"
            >
                <option value="none">None</option>
                <option value="5min">5 minutes before</option>
                <option value="10min">10 minutes before</option>
                <option value="15min">15 minutes before</option>
                <option value="30min">30 minutes before</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Notifications</label>
            <div className="mt-2 space-y-2">
                <div className="flex items-center">
                    <input
                        id="email"
                        name="email"
                        type="checkbox"
                        checked={notifications.email}
                        onChange={handleCheckboxChange('email')}
                        className="circular-checkbox"
                    />
                    <label htmlFor="email" className="ml-2 block text-sm text-gray-700">
                        Email
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="sms"
                        name="sms"
                        type="checkbox"
                        checked={notifications.sms}
                        onChange={handleCheckboxChange('sms')}
                        className="circular-checkbox"
                    />
                    <label htmlFor="sms" className="ml-2 block text-sm text-gray-700">
                        SMS
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="push"
                        name="push"
                        type="checkbox"
                        checked={notifications.push}
                        onChange={handleCheckboxChange('push')}
                        className="circular-checkbox"
                    />
                    <label htmlFor="push" className="ml-2 block text-sm text-gray-700">
                        Push Notifications
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="dashboard"
                        name="dashboard"
                        type="checkbox"
                        checked={notifications.dashboard}
                        onChange={handleCheckboxChange('dashboard')}
                        className="circular-checkbox"
                    />
                    <label htmlFor="dashboard" className="ml-2 block text-sm text-gray-700">
                        Display on Dashboard
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationSettings