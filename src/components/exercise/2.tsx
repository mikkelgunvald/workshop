import React, { Component } from 'react'

export default class Posts extends Component<{ userId: string }, any> {
  state = {
    posts: []
  }

  fetchPosts(userId = '1') {
    return fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}/posts`)
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }))
  }

  componentDidMount() {
    this.fetchPosts(this.props.userId)
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.userId !== prevProps.userId) {
      this.fetchPosts()
    }
  }
  componentWillUnmount() {
    //cleanup
  }

  render() {
    const { posts } = this.state
    if (posts.length) {
      return posts.map((p: any) => <div key={p.id}>{p.title}</div>)
    }
    return <div>loading posts</div>
  }
}
