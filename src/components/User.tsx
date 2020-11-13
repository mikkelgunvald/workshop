import React from 'react'
import { useAuth } from './Auth'

export const User = () => {
  const { user } = useAuth()
  if (!user) return null
  return <div className='fixed top-0 left-0 p-3 text-icon font-semibold'>{user}</div>
}
