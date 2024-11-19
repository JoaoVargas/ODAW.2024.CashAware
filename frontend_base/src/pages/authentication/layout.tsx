import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthenticationLayout() {
  return (
    <>
      <div>AuthenticationLayout</div>
      <Outlet />
    </>
  )
}
