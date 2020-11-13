import React from 'react'
import { HeartIcon, RepeatIcon } from './icons'

const example =
  'content asd asd asd asd asd asd asd asdasdasd asdasdas dasdasdasd as asd asd asdas dasdasd asdasdasd asdasd asdasdasd asd asda sdasdasdasdas asd ads'

export const PostItem = ({ name = 'name', content = example, createdAt = new Date() }) => {
  return (
    <div className='flex flex-row shadow-md mt-4 p-3'>
      <div className='flex items-start justify-center pt-3'>
        <div className='w-12 h-12 rounded-full bg-blue-200 border-0' />
      </div>
      <div className='flex w- flex-col pl-3'>
        <div className='text-sm text-gray-600 font-semibold'>{name}</div>
        <div className='pb-2'>{content}</div>
        <div className='flex flex-row justify-between text-xs text-gray-600'>
          <button>
            <RepeatIcon width={16} height={16} />
          </button>
          <button>
            <HeartIcon width={16} height={16} />
          </button>
          <div>
            {createdAt.toLocaleDateString()} {createdAt.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  )
}
