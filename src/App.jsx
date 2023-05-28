import { useState } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Toaster></Toaster>
    <Home></Home>
    
    </>
  )
}

export default App
