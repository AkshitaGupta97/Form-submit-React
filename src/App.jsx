
import { useState } from 'react'
import './App.css'
import CountDown from './Component/CountDown/CountDown'
import From from './Component/Form/From'
import {FormContext} from './context/FormContext'

function App() {
  const [formInput, setFormInput] = useState({
    Email: '',
    Password: ''
  })

  return (
   <>
      <FormContext.Provider value={{formInput, setFormInput}} >
        <From />
      </FormContext.Provider>

      <CountDown />
   </>
  )
}

export default App
