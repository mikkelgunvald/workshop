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

function useAccordion({ reducer = accordionReducer }) {
  const [openIndexes, dispatch] = React.useReducer(reducer, [0])
  const toggleIndex = (index: number) => dispatch({ type: 'toggle', index })
  return { openIndexes, toggleIndex }
}

type Props = {
  items: { title: any; content: any }[]
  reducer?: typeof accordionReducer
  className?: string
}
export const Accordion: React.FC<Props> = ({ items = [], reducer, className = '' }) => {
  return <div></div>
}
