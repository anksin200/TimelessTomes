import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
        <Navbar/>
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'>
        <Outlet></Outlet>
        </main>
        <Footer/>
    </>
  )
}

export default App
