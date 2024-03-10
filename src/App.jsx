import React from 'react'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import ContextProvider from "./helper/ContextProvider";
import '../src/App.css'

function App() {
  return (
    <ContextProvider>
    <div className='w-[100vw] h-[100vh]'>
      <Navbar/>
      <Home/>
    </div>
    </ContextProvider>
  )
}

export default App