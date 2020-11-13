import React from 'react'

// type AuthContext = {
//   user: null | { email: string; uid: string }
//   signin: (email: string, password: string) => Promise<unknown>
//   signout: () => Promise<unknown>
//   signup: (email: string, password: string) => Promise<unknown>
// }

// const authContext = React.createContext<AuthContext | undefined>(undefined)

// export function AuthProvider({ children }: any) {
//   const ctx = useProvideAuth()
//   return <authContext.Provider value={ctx}>{children}</authContext.Provider>
// }

// export function useAuth() {
//   const ctx = React.useContext(authContext)
//   if (!ctx) {
//     throw new Error('Auth context can only be used within an auth context provider')
//   }
//   return ctx
// }

// function useProvideAuth() {
//   const [user, setUser] = React.useState<{ email: string; uid: string } | null>(null)
//   React.useEffect(() => {
//     return auth().onAuthStateChanged((auth) => {
//       if (auth) {
//         const { displayName, photoURL, uid, email } = auth
//         console.log('onchange')
//         setUser({ email, uid })
//       } else {
//         setUser(null)
//       }
//     })
//   }, [])

//   const signin = (email: string, password: string) => {
//     return new Promise<User | null>((resolve, reject) =>
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(email.toLowerCase(), password)
//         .then(({ user }) => {
//           console.log('then')
//           setUser({ email: user.email, uid: user.uid })
//         })
//         .catch(console.log)
//     )
//   }

//   const signout = () => {
//     return new Promise((resolve, reject) =>
//       firebase
//         .auth()
//         .signOut()
//         .then(() => setUser(null))
//         .catch(console.log)
//     )
//   }

//   const signup = (email: string, password: string) => {
//     return new Promise<User | null>((resolve, reject) =>
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(email.toLowerCase(), password)
//         .then(({ user }) => {
//           setUser({ email: user.email, uid: user.uid })
//         })
//         .catch(console.log)
//     )
//   }

//   return {
//     user,
//     signin,
//     signout,
//     signup
//   }
// }
