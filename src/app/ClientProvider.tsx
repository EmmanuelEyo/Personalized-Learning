// components/ClientProvider.tsx
'use client';

import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store, AppDispatch } from '../redux/store';
import { getUserOnLoad, setLoading } from '@/redux/authSlice';

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const UserLoader: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
      dispatch(setLoading(true))
      dispatch(getUserOnLoad())
    }, [dispatch])

    return null
  }

  return <Provider store={store}>
    <UserLoader />
    {children}
  </Provider>;
};

export default ClientProvider;
