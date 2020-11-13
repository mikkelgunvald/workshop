import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from './Auth'
import { Accordion } from './exercise/3'

export const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const auth = useAuth()
  const history = useHistory()
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    auth.signin(email || 'testUser', password).then(() => history.push('/'))
  }
  return (
    <form className='p-3' autoComplete='off' onSubmit={onSubmit}>
      <div className='text-center text-2xl font-bold'>Login</div>
      <div className='px-2 py-1'>Email:</div>
      <div className='flex items-center bg-lightbg'>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          placeholder='Email'
          className='w-full bg-lightbg p-1 px-2'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='px-2 py-1 mt-3'>Password:</div>
      <div className='flex items-center bg-lightbg'>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          placeholder='Password...'
          className='w-full bg-lightbg p-1 px-2'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex justify-evenly'>
        <button type='submit' className='inline px-2 py-1 rounded-sm bg-lightbg mx-auto mt-4'>
          Login
        </button>
      </div>
      {/* <Accordion items={items} className='mt-3' /> */}
    </form>
  )
}
const items = [
  { title: '1', content: 'Opened on 1' },
  { title: '2', content: 'Opened on 2' },
  { title: '3', content: 'Opened on 3' }
]
