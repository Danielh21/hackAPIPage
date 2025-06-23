import React from 'react'


interface StoryAttributeProps {
    AtrributeKey: string;
    AtrributeValue: string | number;
}


const StoryAttribute = ( {AtrributeKey, AtrributeValue} : StoryAttributeProps) => {
  return (
    <div>
        <p>{AtrributeKey} : {AtrributeValue}</p>
    </div>
  )
}

export default StoryAttribute