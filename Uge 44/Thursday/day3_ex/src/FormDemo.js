import React, { useState } from "react";

const FormDemo = () => {
  const initialState = { name: "", age: "", email: "", phone: "" };
  const [person, setPerson] = useState(initialState);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      window.alert(JSON.stringify(person))
      setPerson(initialState)
  };

  const handleInput = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    //person[id] = value;
    setPerson({ ...person, [id]: value });
  };

  return (
    <div style={{ marginTop: 25 }}>
      <form onSubmit={handleSubmit}onChange={handleInput}> 
        <input
          id="name"
          type="text"
          value={person.name}
          placeholder="Name"
        />
        <br />
        <input
          id="phone"
          type="number"
          value={person.phone}
          placeholder="Phone"
        />
        <br />
        <input
          id="age"
          type="number"
          value={person.age}
          placeholder="Age"
        />
        <br />
        <input
          id="email"
          type="text"
          value={person.email}
          onChange={handleInput}
          placeholder="Email"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
};

export default FormDemo;
