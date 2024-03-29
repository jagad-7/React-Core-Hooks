import React, {useState} from 'react'

// Array type  useState hook

const initialArray = [
    {   
        id: 'abc',
        fName: 'Jagadeesh',
        lName: 'Bheemala',
        age: 27
    },
    {
        id: 'def',
        fName: 'Jai',
        lName: 'B',
        age: 28
    },
    {
        id: 'ijk',
        fName: 'Priya',
        lName: 'K',
        age: 29
    },
    {
        id: 'lmn',
        fName: 'Amala',
        lName: 'B',
        age: 30
    },
]
export const ArrayType = () => {
    const [data, setData] = useState(initialArray)

    // Delete the data use with map() method
    const handleDelete =(comingId)=>{
       const filterData = data.filter((eachData)=>{
        return eachData.id !== comingId
       })
       setData(filterData)
    }
    
  return (
    <div>
        <ul>
            {
                data.map((eachData, index)=>{
                    const {fName, lName, age, id} = eachData
                    return(
                        <li key={index} style={{listStyleType: 'none', border: '3px solid gray',marginTop: 3}}>
                            <p>My First Name : <strong>{fName}</strong></p>
                            <p>My Last Name : <strong>{lName}</strong></p>
                            <p>My Age : <strong>{age}</strong></p>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                        </li>
                    )
                }
            )}
        </ul>
    </div>
  )
}
