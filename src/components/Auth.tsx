import React from 'react'

type AuthContext = {
  user: null | string
  signin: (email: string, password: string) => Promise<unknown>
  signout: () => Promise<unknown>
  signup: (email: string, password: string) => Promise<unknown>
}

const authContext = React.createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: any) {
  const ctx = useProvideAuth()
  return <authContext.Provider value={ctx}>{children}</authContext.Provider>
}

export function useAuth() {
  const ctx = React.useContext(authContext)
  if (!ctx) {
    throw new Error('Auth context can only be used within an auth context provider')
  }
  return ctx
}

function useProvideAuth() {
  const [user, setUser] = React.useState<string | null>(null)

  const signin = (email: string, password: string) => {
    return new Promise((res) => {
      setTimeout(() => {
        setUser(email)
        res(email)
      }, 200)
    })
  }

  const signout = () => {
    return new Promise((res) => {
      setTimeout(() => {
        setUser(null)
        res(null)
      }, 200)
    })
  }

  const signup = (email: string, password: string) => {
    return new Promise((res) => {
      setTimeout(() => {
        setUser(email)
        res(email)
      }, 200)
    })
  }

  return {
    user,
    signin,
    signout,
    signup
  }
}
