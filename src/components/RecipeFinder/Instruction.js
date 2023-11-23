import React from 'react'
import '../../styles/components/_ingredient.scss'

const Instruction = ({ instruction, removeInstruction,color }) => {

  return (
    <p>{instruction} <button className='instruction-remove' style={color} onClick={removeInstruction} type="button">x</button></p>
  )
}

export default Instruction;