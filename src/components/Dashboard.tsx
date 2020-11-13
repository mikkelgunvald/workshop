import React from 'react'
import { MAX_MSG_LENGTH } from '../App'
import { SendIcon } from './icons'
import { PostItem } from './PostItem'

// const getNode = (id: string) => document.getElementById(id) as HTMLInputElement
// function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
//   setMessage(e.target.value)
//   const node = lengthRef.current
//   if (node) node.textContent = `${e.target.value.length}`
// }

export const Dashboard = () => {
  return (
    <>
      <form className='p-3' onSubmit={(e) => e.preventDefault()}>
        <div className='flex items-center bg-lightbg'>
          <input
            type='text'
            name='message'
            id='message'
            placeholder='Send something'
            className='w-full bg-lightbg p-1 px-2'
            maxLength={MAX_MSG_LENGTH}
          />
          <button type='submit' className='px-2 py-1'>
            <SendIcon />
          </button>
        </div>
        <div className='flex justify-end mt-1 font-mono text-xs text-gray-600'>
          <span></span>/{MAX_MSG_LENGTH}
        </div>
      </form>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </>
  )
}
