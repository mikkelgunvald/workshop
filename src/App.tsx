import React from 'react'
import { Dashboard } from './components/Dashboard'
import { MoonIcon, SunIcon } from './components/icons'
import { BrowserRouter as Router, Redirect, Route, RouteProps } from 'react-router-dom'
import { AuthProvider, useAuth } from './components/Auth'
import { Login } from './components/Login'
import { User } from './components/User'
export const MAX_MSG_LENGTH = 140

function App() {
  const [theme, setTheme] = React.useState(document.body.dataset.theme as string)
  React.useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <AuthProvider>
      <div className='mx-auto h-screen sm:max-w-lg'>
        <Router>
          <PrivateRoute>
            <User />
            <Dashboard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
        </Router>

        <button
          type='button'
          className='fixed top-0 right-0 p-3'
          onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? <MoonIcon fill='' /> : <SunIcon />}
        </button>
      </div>
    </AuthProvider>
  )
}

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const auth = useAuth()
  console.log(auth.user ? 'yes' : 'no')
  return <Route {...rest}>{auth.user ? children : <Redirect to='/login' />}</Route>
}

export default App
