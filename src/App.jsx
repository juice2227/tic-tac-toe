// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Square from './components/square'

function App() {
  return(
  <>
  <div className='board-row'> 
  <Square />
  <Square />
  <Square />
  
  </div>

  <div className='board-row'>
  <Square />
  <Square />
  <Square />
    
    
  </div>

  <div className='board-row'>
  <Square />
  <Square />
  <Square />
   
  </div>
  
  
  </>
  )

  }

export default App
