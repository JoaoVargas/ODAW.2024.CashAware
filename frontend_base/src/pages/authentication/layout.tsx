import { useAuth } from '@/lib/useAuth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function AuthenticationLayout() {
  const {user} = useAuth()

  if (user) return <Navigate to="/dashboard" />

  return (
    <>
      <div>AuthenticationLayout</div>
      <Outlet />
    </>
  )
}
