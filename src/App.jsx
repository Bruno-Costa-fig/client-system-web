import './App.css'
import { Outlet } from 'react-router-dom'
import NavbarDrawer from './components/NavbarDrawer'

function App() {

  return (
    <>
      <NavbarDrawer />
      <Outlet />
    </>
  )
}

export default App
