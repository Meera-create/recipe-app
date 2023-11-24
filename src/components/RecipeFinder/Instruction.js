import React from 'react'
import '../../styles/components/_instruction.scss'

const Instruction = ({ instruction, removeInstruction, savedRecipeInstruction, index}) => {
  

    const determineColorInstruction = (index) => {
    if (index <= savedRecipeInstruction) {
      return 'color3'
    } else {
      return 'color4'
    }
    
  }

  return (
    <p>{instruction} <button className={`instruction-remove ${determineColorInstruction(index)}`} style={{ color: 'white' }} onClick={removeInstruction} type="button">x</button></p>
  )


}

export default Instruction;