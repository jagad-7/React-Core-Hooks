import React, { useState } from 'react'

export const Name = () => {
    const [first, setFirstName] = useState('Jagadeesh')
    const [last, setLastName] = useState('Bheemala')
    const [age] = useState(27)

    const ChangeNameFirst=()=>{
        setFirstName('Jai')
    }
    const ChangeNameLast=()=>{
        setLastName('B')
    }
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={ChangeNameFirst}>Change</button>
        <h2>{last}</h2>
        <button onClick={ChangeNameLast}>Change</button>     
        <h3>{age}</h3>
    </div>
  )
}
