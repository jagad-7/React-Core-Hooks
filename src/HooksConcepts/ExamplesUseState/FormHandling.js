import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
     e.preventDefault()
    const userData ={
      name: name,
      email: email,
      password: password
    }
    console.log(userData)
  }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <div className="form-content">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Create a Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormHandling;
