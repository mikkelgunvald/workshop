import React from 'react'
// import { MAX_MSG_LENGTH } from '../../App'
// import { SendIcon } from '../icons'
// import { PostItem } from '../PostItem'
// import { useAuth } from './Auth'

// export const Dashboard = () => {
//   const { user } = useAuth()
//   const [posts, createPost] = usePosts(user!.uid)
//   const [message, setMessage] = React.useState('')
//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//   }
//   return (
//     <>
//       <form className='p-3' onSubmit={handleSubmit}>
//         <div className='flex items-center bg-lightbg'>
//           <input
//             type='text'
//             name='message'
//             id='message'
//             value={message}
//             placeholder='Send something'
//             className='w-full bg-lightbg p-1 px-2'
//             maxLength={MAX_MSG_LENGTH}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button type='submit' className='px-2 py-1'>
//             <SendIcon />
//           </button>
//         </div>
//         <div className='flex justify-end mt-1 font-mono text-xs text-gray-600'>
//           <span>{message.length}</span>/{MAX_MSG_LENGTH}
//         </div>
//       </form>
//       <div>
//         {posts.map((p) => (
//           <PostItem key={p.id} name={p.email} content={p.content} />
//         ))}
//       </div>
//     </>
//   )
// }
// type Post = { userId: string; email: string; content: string; createdAt: Date; id: string }
// type Actions = ({ type: 'ADD' } | { type: 'UPDATE' } | { type: 'REMOVE' }) & { post: Post }

// function reducer(state: Post[], action: Actions) {
//   switch (action.type) {
//     case 'ADD':
//       return [action.post, ...state]
//     default:
//       throw new Error(`cant do that: ${action.type}`)
//   }
// }

// function usePosts(userId: string): [Post[], typeof createPost] {
//   const [posts, dispatch] = React.useReducer(reducer, [])
//   React.useEffect(() => {
//     return store
//       .collection('posts')
//       .where()
//       .orderBy('createdAt', 'asc')
//       .onSnapshot(function (snapshot) {
//         snapshot.docChanges().forEach(function (change) {
//           const rawPost = change.doc.data()
//           const post = {
//             ...rawPost,
//             createdAt: rawPost.createdAt.toDate()
//           }
//           if (change.type === 'added') {
//             dispatch({ type: 'ADD', post })
//           }
//           if (change.type === 'modified') {
//             dispatch({ type: 'UPDATE', post })
//           }
//           if (change.type === 'removed') {
//             dispatch({ type: 'REMOVE', post })
//           }
//         })
//       })
//   }, [userId])
//   return [posts, createPost]
// }

// async function createPost(userId: string, email: string, content: string): Promise<Post> {
//   const ref = store.collection('posts').doc()
//   const post = { userId, email, content, id: ref.id, createdAt: new Date() }
//   await ref.set(post)
//   return post
// }
