import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import StaffList from './components/Staff/StaffList'
import { ToastContainer } from 'react-toastify'
import { toastifyOptions } from './theme/options'

function App() {
  return (
    <div className='container mx-auto'>
      <StaffList />
      <ToastContainer {...toastifyOptions} />
    </div>
  )
}

export default App
