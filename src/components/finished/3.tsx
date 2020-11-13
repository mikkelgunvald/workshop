import React from 'react'

type actions = { type: 'toggle'; index: number }

function accordionReducer(openIndexes: number[], action: actions) {
  switch (action.type) {
    case 'toggle': {
      const closing = openIndexes.includes(action.index)
      return closing
        ? openIndexes.filter((i) => i !== action.index)
        : [...openIndexes, action.index]
    }
    default: {
      throw new Error('Unhandled type in accordionReducer: ' + action.type)
    }
  }
}

function useAccordion(reducer = accordionReducer): [number[], typeof toggleIndex] {
  const [openIndexes, dispatch] = React.useReducer(reducer, [0])
  const toggleIndex = (index: number) => dispatch({ type: 'toggle', index })
  return [openIndexes, toggleIndex]
}
type Props = {
  items: { title: any; content: any }[]
  reducer?: typeof accordionReducer
  className?: string
}
export const Accordion: React.FC<Props> = ({ items = [], reducer, className = '' }) => {
  const [openIndexes, toggleIndex] = useAccordion(reducer)
  return (
    <div className={className}>
      {items.map((item, index) => {
        const closed = openIndexes.includes(index)
        return (
          <div className='mb-2' key={item.title}>
            <div className='p-2 bg-lightbg cursor-pointer' onClick={() => toggleIndex(index)}>
              {item.title}
            </div>
            <div className='border border-lightbg' style={closed ? closedStyle : openStyle}>
              <div className='p-2'>{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
const closedStyle = {
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height 0.25s ease-out'
}
const openStyle = { maxHeight: 100, transition: 'max-height 0.25s ease-out' }
