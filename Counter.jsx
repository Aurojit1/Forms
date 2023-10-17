import React, { useState } from "react";

const Counter = () => {
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [showEntries, setShowEntries] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = () => {
    const newEntry = {
      name: name,
      phone: phone
    };
    setBlocks([...blocks, newEntry]);
    setName('');
    setPhoneNumber('');
  };
 
  const toggleShowEntries = () => {
    setShowEntries(!showEntries);
  };
  
  const handleDelete = (nameToDelete) => {
    const updatedBlocks = blocks.filter((entry) => entry.name !== nameToDelete);
    setBlocks(updatedBlocks);
  };

  return (
    <div>
      <input onChange={handleNameChange} value={name} placeholder="Enter your name" />
      <input onChange={handlePhoneNumberChange} value={phone} placeholder="Enter your phone number" />
      <button onClick={handleSubmit}>Submit</button>

      <button onClick={toggleShowEntries}>
        {showEntries ? 'Hide Entries' : 'Show Entries'}
      </button>

      {showEntries && (
        <div>
          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <div>
            <h2>Entries:</h2>
            <ul>
              {blocks.map((entry) => (
                <li >
                  <strong>Name: </strong> {entry.name} <strong>PhoneNumber: </strong> {entry.phone}
                  <button onClick={() => handleDelete(entry.name)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Counter;
