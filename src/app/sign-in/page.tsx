"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState, useAppDispatch } from '@/redux/store';
import { handleUserLogin } from '@/redux/authSlice'
import './login.css'
import Link from 'next/link'

const Page = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const user = useSelector((state: RootState) => state.auth.user)
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    useEffect(()=> {
        if(user) {
            router.push('/personalized-dashboard')
        }
    }, [user, router])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value

        setCredentials({ ...credentials, [name]: value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(handleUserLogin(credentials, router))
    }


  return (
    <div className='auth--container bg-zinc-900'>
        <div className='form--wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='field--wrapper'>
                    <label>Email</label>
                    <input type='email' required name='email' value={credentials.email} onChange={handleInputChange} placeholder='Enter your email...' />
                </div>
                <div className='field--wrapper'>
                    <label>Pssword</label>
                    <input type='password' required name='password' value={credentials.password} onChange={handleInputChange} placeholder='Enter password...' />
                </div>
                <div className='field--wrapper'>
                    <input type='submit' value='Login' className='btn btn-lg btn--main' />
                </div>
            </form>

            <p>Don&apos;t have an account? Register <Link className='text-blue-500' href='/sign-up'>here</Link></p>
        </div>
    </div>
  )
}

export default Page