
import './App.css'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/Navbar/NavbarComponent'
import SideNav from './components/Navbar/SideNav'

function App() {
  return (
    <>
      <NavbarComponent />
      <SideNav />
      <Outlet></Outlet>
    </>
  )
}

export default App
