import React, { useState } from "react";

// 1 way to implement
// const initialObj ={
//     fName: 'Jagadeesh',
//     lName: 'Bheemala',
//     age: 27
// }
const Index = () => {
  // 1 way   
  // const [data, setData] = useState(initialObj)

  // 2 way to  implement
  // const [data, setData] = useState(
  //     {
  //         fName: 'Jagadeesh',
  //         lName: 'Bheemala',
  //         age: 27
  //     }
  // )

  //  3 way to implement

  function initialData() {
    return {
      fName: "Jagadeesh",
      lName: "Bheemala",
      age: 27,
    };
  }
  const [data, setData] = useState(initialData);
  const changeFirstName = () => {
    setData({
      ...data,
      fName: "Jai",
    });
  };
  const changeLastName = () => {
    setData({
      ...data,
      lName: "B",
    });
  };
  return (
    <div>
      <h1>My First Name {data.fName}</h1>
      <button onClick={changeFirstName}>Change First Name</button>
      <h2>My Last Name {data.lName}</h2>
      <button onClick={changeLastName}>Change Last Name</button>
      <h3>Age is {data.age}</h3>
    </div>
  );
};

export default Index;
