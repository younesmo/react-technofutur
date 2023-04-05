
import { useState } from 'react'
import './App.css'
import Exo1 from './components/exo1'
import Exo2 from './components/exo2/exo2'

function App() {

  return (
    <div className="App">
      <Exo1 age={26} name='Younes'/>      
      <Exo2 incrementVal={1}/>
    </div>
  )
}

export default App
