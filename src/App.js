import './App.css';
import React, { useState } from 'react';
import UserInput from './components/User/UserInput';
import UserDetails from './components/UserDetails/UserDetails';


function App() {

  const [userData, setUserData] = useState([{ name: "Nand Ji", age: 25 }]);

  const saveDataHandler = (userData) => {
    setUserData((prev) => {
      return [...prev, userData]
    })
  }

  return (
    <div className="App">
      <UserInput onSaveData={saveDataHandler} />
      <UserDetails user={userData} />
    </div>
  );
}

export default App;
