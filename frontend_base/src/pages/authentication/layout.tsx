import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/lib/useAuth'

export default function AuthenticationLayout() {
  const {user} = useAuth()
  if (user) return <Navigate to="/dashboard" />

  return (
    <div className='flex items-center justify-center w-screen h-screen css-selector'>
        <Outlet />
    </div>
  )
}
