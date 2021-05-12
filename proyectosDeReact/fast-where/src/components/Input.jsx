import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
const Input = () => {
  const { state, inputChange} = useContext(AppContext)
  const { cupones } = state
  return(
    <form action="">
      <input type="text" />
    </form>
  )
}
export default Input
