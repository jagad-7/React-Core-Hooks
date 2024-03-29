import React, { useState } from "react";


//  Conditional Rendering

const Exmp1 = () => {
  const [showData, setShowData] = useState(false);
  const handleChange = () =>{
    setShowData(!showData)
  }
  return (
    <div>
      <button onClick={handleChange}>{showData ? "Hide" : "Show"}</button>

      {/* This is && and Ternary oparetors */}
      {/* {showData && (
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit eligendi accusamus quasi? Dolorem, eius distinctio
          debitis laudantium fugit possimus dolorum sapiente veniam facere?
          Blanditiis nisi porro iste accusantium, molestiae praesentium impedit
          consequatur maxime eligendi, dolorem tempore, ratione voluptatibus
          dicta consequuntur tenetur tempora accusamus rem at? Suscipit omnis
          animi voluptatibus. Tempora temporibus laboriosam placeat id a numquam
          soluta obcaecati, voluptate minima illo odio laborum laudantium
          nesciunt deserunt adipisci libero in? Ipsam dolore unde blanditiis
          cupiditate repellat nisi ad adipisci exercitationem officia minima
          iure earum, totam voluptate nihil quam, eaque odio nobis consequatur
          aspernatur, sequi expedita soluta aliquid. Reiciendis eos eius eaque?
        </div>
      )} */}

      {/* Condition */}
      {
        showData ? <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque deleniti deserunt ducimus doloribus aspernatur soluta quibusdam architecto corporis quisquam magnam sit laborum aliquam, aliquid saepe, quod repellendus consequuntur modi iusto! Quia earum, neque blanditiis illo veniam est autem odio.</div>
        : 
        <h4>The Data Is Hidden</h4>
      }
    </div>
  );
};

export default Exmp1;
