"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
    const ComponentwithAuth = (props: any) => {
        const router = useRouter();
        const user = useSelector((state: RootState) => state.auth.user)
        const loading = useSelector((state: RootState) => state.auth.loading)
    
        useEffect(() => {
            if(!loading && !user) {
                router.push('/sign-in')
            }
        }, [user, loading, router])
    
        if(loading) {
            return( 
                <div className="fixed inset-0 flex items-center justify-center bg-surface">
                <div className="h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                    <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </div>
          )
        }
    
        return <WrappedComponent {...props} />
    }

    ComponentwithAuth.displayName = `ProtectedRoute(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

    return ComponentwithAuth
}

export default ProtectedRoute