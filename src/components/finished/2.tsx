import React from 'react'
import { PostItem } from '../PostItem'

export const Posts = () => {
  const posts = usePosts()
  if (posts.length) {
    return posts.map((p: any) => <PostItem key={p.id} name={p.title} content={p.body} />)
  }
  return <div>loading posts</div>
}

const usePosts = (userId = 1) => {
  const [posts, setPosts] = React.useState([])
  React.useEffect(() => {
    let current = true
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((posts) => {
        if (current) setPosts(posts)
      })
    return () => {
      current = false
    }
  }, [userId])
  return posts
}
