// @ts-nocheck
import React, { Component } from 'react'

export default class Counter extends Component<{ initialCount: number }, { count: number }> {
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>
  }
}

// const obj = {
//   name: 'object',
//   display: function () {
//     console.log(this.name)
//   }
// }
// obj.display() <- has context
// function st(cb, delay){
//   cb()
// }
// st(obj.display, 2)
// callback = obj.display; <- loses context - default window/undefined
