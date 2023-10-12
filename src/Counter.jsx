import React, { useState } from "react";

const Counter = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [blocks, setBlocks] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleSubmit = () => {
    const newEntry = {
      name: name,
      phoneNumber: phoneNumber
    };

    setBlocks([...blocks, newEntry]);
    setName('');
    setPhoneNumber('');
  }

  return (
    <div>
      <input onChange={handleNameChange} value={name} placeholder="Enter a name" />
      <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Enter a phone number" />
      <button onClick={handleSubmit}>Submit</button>
      <p>Name: {name}</p>
      <p>Phone Number: {phoneNumber}</p>
      <div>
        <h2>Entries:</h2>
        <ul>
          {blocks.map((entry, index) => (
            <li key={index}>
              <strong>Name:</strong> {entry.name}, <strong>Phone Number:</strong> {entry.phoneNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counter;
