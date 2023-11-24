import React from 'react';
import Instruction from './Instruction';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_ingredients-list.scss';

const InstructionsList = ({ instructionsList, setInstructionsList, savedRecipeInstruction }) => {

  const handleRemoveInstruction = (e) => {
    e.preventDefault();
    const removedInstruction = e.target.parentElement.firstChild.data;
    const newInstructionsList = instructionsList.filter((instruction) => instruction !== removedInstruction);
    setInstructionsList([...newInstructionsList]);
    toast.success('Instruction removed!');
  }

  return (
    <div>
      <Toaster />
      {instructionsList.map((instruction, index) => {
        return <Instruction instruction={instruction} key={index} removeInstruction={handleRemoveInstruction}
        savedRecipeInstruction={savedRecipeInstruction}/>
      })}
    </div>
  );
}

export default InstructionsList;