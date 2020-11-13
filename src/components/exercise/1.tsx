// @ts-nocheck
import React, { Component } from 'react'

export default class Counter extends Component<{ initialCount: number }, { count: number }> {
  constructor() {
    super()
    this.state = { count: this.props.initialCount }
  }

  increment() {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>
  }
}
