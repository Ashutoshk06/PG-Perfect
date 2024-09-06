import { useState } from 'react'

import SignupPage from './pages/signupPage'
import { Outlet } from 'react-router-dom'
import Nav from './pages/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Nav/>
      <Outlet />
    </div>
  )
}

export default App
